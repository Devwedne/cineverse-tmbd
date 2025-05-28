import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import MovieList from '../../components/MovieList';
import api from '../../services/api';
import { Container, Content, LoadingWrapper } from './styles';
import Footer from '../../components/Footer';

const Movies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [popularResponse, topRatedResponse, upcomingResponse] = await Promise.all([
          api.get('/movie/popular'),
          api.get('/movie/top_rated'),
          api.get('/movie/upcoming')
        ]);

        const formatMovies = (movies) => movies.map(movie => ({
          id: movie.id,
          title: movie.title,
          imageUrl: movie.poster_path 
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : 'https://via.placeholder.com/500x750?text=Sem+Poster',
          rating: movie.vote_average,
          releaseDate: movie.release_date,
          mediaType: 'movie'
        }));

        setPopularMovies(formatMovies(popularResponse.data.results));
        setTopRatedMovies(formatMovies(topRatedResponse.data.results));
        setUpcomingMovies(formatMovies(upcomingResponse.data.results));
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (isLoading) {
    return (
      <Container>
        <Header />
        <LoadingWrapper>
          Carregando...
        </LoadingWrapper>
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <Content>
        <MovieList 
          title="Filmes Populares" 
          movies={popularMovies} 
        />
        <MovieList 
          title="Mais Bem Avaliados" 
          movies={topRatedMovies} 
        />
        <MovieList 
          title="Próximos Lançamentos" 
          movies={upcomingMovies} 
        />
      </Content>
      <Footer />
    </Container>
  );
};

export default Movies; 