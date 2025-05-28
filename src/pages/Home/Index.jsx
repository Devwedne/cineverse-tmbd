import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import MovieList from '../../components/MovieList';
import { AppWrapper, ContentWrapper, MainContent, LoadingWrapper } from './styles';
import Footer from '../../components/Footer';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingShows, setTrendingShows] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [popularResponse, trendingResponse, topRatedResponse] = await Promise.all([
          api.get('/movie/popular'),
          api.get('/tv/popular'),
          api.get('/movie/top_rated')
        ]);

        const formatMovieData = (data, type) => {
          return data.map(item => ({
            id: item.id,
            title: item.title || item.name,
            imageUrl: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            rating: item.vote_average,
            releaseDate: item.release_date || item.first_air_date,
            mediaType: type
          }));
        };

        setPopularMovies(formatMovieData(popularResponse.data.results.slice(0, 10), 'movie'));
        setTrendingShows(formatMovieData(trendingResponse.data.results.slice(0, 10), 'tv'));
        setTopRatedMovies(formatMovieData(topRatedResponse.data.results.slice(0, 10), 'movie'));
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
          <MovieList title="Filmes Populares" movies={popularMovies} />
          <MovieList title="Séries em Alta" movies={trendingShows} />
          <MovieList title="Filmes Mais Bem Avaliados" movies={topRatedMovies} />
        </MainContent>
      </ContentWrapper>
      <Footer />
    </AppWrapper>
  );
};

export default Home; 