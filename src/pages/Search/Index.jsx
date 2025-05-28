import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/Header';
import MovieList from '../../components/MovieList';
import api from '../../services/api';
import { AppWrapper, ContentWrapper, MainContent, LoadingWrapper, ResultsTitle, NoResults } from './styles';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const searchMovies = async () => {
      if (!query) return;

      setIsLoading(true);
      try {
        const [moviesResponse, tvResponse] = await Promise.all([
          api.get('/search/movie', {
            params: {
              query: query
            }
          }),
          api.get('/search/tv', {
            params: {
              query: query
            }
          })
        ]);

        const formatResults = (data, type) => {
          return data.map(item => ({
            id: item.id,
            title: type === 'movie' ? item.title : item.name,
            imageUrl: item.poster_path 
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : 'https://via.placeholder.com/500x750?text=Sem+Imagem',
            rating: item.vote_average,
            releaseDate: type === 'movie' ? item.release_date : item.first_air_date,
            mediaType: type
          }));
        };

        const movieResults = formatResults(moviesResponse.data.results, 'movie');
        const tvResults = formatResults(tvResponse.data.results, 'tv');
        
        const allResults = [...movieResults, ...tvResults]
          .sort((a, b) => b.rating - a.rating);

        setResults(allResults);
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao buscar resultados:', error);
        setIsLoading(false);
      }
    };

    searchMovies();
  }, [query]);

  if (isLoading) {
    return (
      <AppWrapper>
        <Header />
        <LoadingWrapper>
          Carregando...
        </LoadingWrapper>
      </AppWrapper>
    );
  }

  return (
    <AppWrapper>
      <Header />
      <ContentWrapper>
        <MainContent>
          <ResultsTitle>
            Resultados para: "{query}"
          </ResultsTitle>
          
          {results.length > 0 ? (
            <MovieList 
              movies={results} 
              showMediaType={true}
            />
          ) : (
            <NoResults>
              Nenhum resultado encontrado...
            </NoResults>
          )}
        </MainContent>
      </ContentWrapper>
    </AppWrapper>
  );
};

export default Search; 