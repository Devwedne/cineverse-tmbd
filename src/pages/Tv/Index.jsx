import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import MovieList from '../../components/MovieList';
import api from '../../services/api';
import { Container, Content, LoadingWrapper } from './styles';
import Footer from '../../components/Footer';

const Tv = () => {
  const [popularShows, setPopularShows] = useState([]);
  const [topRatedShows, setTopRatedShows] = useState([]);
  const [airingTodayShows, setAiringTodayShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const [popularResponse, topRatedResponse, airingTodayResponse] = await Promise.all([
          api.get('/tv/popular'),
          api.get('/tv/top_rated'),
          api.get('/tv/airing_today')
        ]);

        const formatShows = (shows) => shows.map(show => ({
          id: show.id,
          title: show.name,
          imageUrl: show.poster_path 
            ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
            : 'https://via.placeholder.com/500x750?text=Sem+Poster',
          rating: show.vote_average,
          releaseDate: show.first_air_date,
          mediaType: 'tv'
        }));

        setPopularShows(formatShows(popularResponse.data.results));
        setTopRatedShows(formatShows(topRatedResponse.data.results));
        setAiringTodayShows(formatShows(airingTodayResponse.data.results));
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao buscar séries:', error);
        setIsLoading(false);
      }
    };

    fetchShows();
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
          title="Séries Populares" 
          movies={popularShows} 
        />
        <MovieList 
          title="Séries Mais Bem Avaliadas" 
          movies={topRatedShows} 
        />
        <MovieList 
          title="Em Exibição Hoje" 
          movies={airingTodayShows} 
        />
      </Content>
      <Footer />
    </Container>
  );
};

export default Tv; 