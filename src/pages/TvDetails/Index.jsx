import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Container, 
  Content, 
  MovieBanner, 
  ReviewContainer 
} from '../TvDetails/styles';
import CastMember from '../../components/CastMember';
import Header from '../../components/Header';
import api from '../../services/api';
import { Star } from 'lucide-react';

const TvDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const [movieResponse, creditsResponse, reviewsResponse] = await Promise.all([
          api.get(`/tv/${id}`),
          api.get(`/tv/${id}/credits`),
          api.get(`/tv/${id}/reviews`)
        ]);

        setMovie(movieResponse.data);
        setCast(creditsResponse.data.cast.slice(0, 6));
        setReviews(reviewsResponse.data.results.slice(0, 3));
      } catch (error) {
        console.error('Erro ao buscar detalhes do filme:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return (
      <Container>
        <Header />
        <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.25rem' }}>
          Carregando...
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <Content>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <MovieBanner image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
              <h1 className="text-white fw-bold">{movie.name || movie.title}</h1>
            </MovieBanner>

            <div style={{ marginTop: '1rem' }}>
              <div className="d-flex align-items-center gap-3 text-white">
                <div className="d-flex align-items-center">
                  <Star fill="#e92932" color="#e92932" />
                  <span className="ms-1">
                    {typeof movie.vote_average === 'number' ? movie.vote_average.toFixed(1) : 'N/A'}
                  </span>
                </div>
                <span>•</span>
                <span>
                  {movie.first_air_date
                    ? new Date(movie.first_air_date).getFullYear()
                    : movie.release_date
                    ? new Date(movie.release_date).getFullYear()
                    : 'N/A'}
                </span>
                <span>•</span>
                <span>
                  {typeof movie.episode_run_time === 'object' && movie.episode_run_time.length > 0
                    ? `${Math.floor(movie.episode_run_time[0] / 60)}h ${movie.episode_run_time[0] % 60}min`
                    : typeof movie.runtime === 'number'
                    ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min`
                    : 'N/A'}
                </span>
              </div>
              <p className="text-white mt-3">{movie.overview}</p>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <h2 className="text-white fw-bold">Elenco</h2>
              <div style={{ marginTop: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1rem' }}>
                  {cast.map((actor) => (
                    <CastMember
                      key={actor.id}
                      image={actor.profile_path 
                        ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                        : 'https://via.placeholder.com/200x200?text=Sem+Foto'}
                      name={actor.name}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <h2 className="text-white fw-bold">Avaliações</h2>
              <ReviewContainer>
                {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <div key={review.id} style={{ background: '#472426', padding: '1rem', borderRadius: '0.5rem' }}>
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <p className="text-white mb-1 fw-medium">{review.author}</p>
                          <p className="text-white small mb-0">
                            {new Date(review.created_at).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                        {review.author_details?.rating && (
                          <div className="d-flex align-items-center">
                            <Star size={16} className="text-[#e92932]" fill="#e92932" />
                            <span className="text-white ms-1">{review.author_details.rating}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-white mb-0">
                        {review.content.length > 300 
                          ? `${review.content.substring(0, 300)}...` 
                          : review.content}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-white text-center">Nenhuma avaliação disponível.</p>
                )}
              </ReviewContainer>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default TvDetails;