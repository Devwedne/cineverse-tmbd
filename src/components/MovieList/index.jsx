import React, { useState } from 'react';
import styled from 'styled-components';
import { Star, Film, Tv, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Section = styled.section`
  margin-bottom: 3rem;
  padding: 0 1rem;
  position: relative;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 1200px) {
    padding: 0;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ScrollButton = styled.button`
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(71, 36, 38, 0.8);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  transition: all 0.2s ease;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);

  @media (min-width: 768px) {
    display: flex;
  }

  &:hover {
    background: rgba(71, 36, 38, 0.95);
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0;
    cursor: default;
  }

  &.left {
    left: -20px;
  }

  &.right {
    right: -20px;
  }
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
  position: relative;

  @media (min-width: 768px) {
    display: flex;
    gap: 1.25rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 0.5rem 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const MovieCard = styled(Link)`
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  position: relative;

  @media (min-width: 768px) {
    flex: 0 0 180px;
  }

  &:hover {
    color: white;
    transform: translateY(-8px);

    .movie-info {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const MovieImage = styled.div`
  width: 100%;
  aspect-ratio: 2/3;
  border-radius: 1rem;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${MovieCard}:hover &::after {
    opacity: 1;
  }
`;

const MovieInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  color: white;
  z-index: 1;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
`;

const MovieTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0 0 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const MovieMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #e92932;
`;

const MediaType = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
`;

const MovieList = ({ title, movies, showMediaType }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const gridRef = React.useRef(null);

  const handleScroll = (direction) => {
    const container = gridRef.current;
    const scrollAmount = 200;
    
    if (container) {
      const newPosition = direction === 'left'
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount);
      
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      
      setScrollPosition(newPosition);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.getFullYear();
  };

  const getMediaTypeIcon = (type) => {
    if (type === 'movie') return <Film size={14} />;
    if (type === 'tv') return <Tv size={14} />;
    return null;
  };

  return (
    <Section>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>

      <ScrollButton 
        className="left" 
        onClick={() => handleScroll('left')}
        disabled={scrollPosition <= 0}
      >
        <ChevronLeft size={24} />
      </ScrollButton>

      <MovieGrid ref={gridRef}>
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            to={`/${movie.mediaType === 'tv' || (!movie.mediaType && movie.first_air_date) ? 'tv' : 'movie'}/${movie.id}`}
          >
            <MovieImage image={movie.imageUrl} />
            <MovieInfo className="movie-info">
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieMeta>
                <Rating>
                  <Star size={12} fill="#e92932" />
                  <span>{movie.rating?.toFixed(1)}</span>
                </Rating>
                <span>•</span>
                <span>{formatDate(movie.releaseDate)}</span>
                {showMediaType && movie.mediaType && (
                  <>
                    <span>•</span>
                    <MediaType>
                      {getMediaTypeIcon(movie.mediaType)}
                      <span>{movie.mediaType === 'movie' ? 'Filme' : 'Série'}</span>
                    </MediaType>
                  </>
                )}
              </MovieMeta>
            </MovieInfo>
          </MovieCard>
        ))}
      </MovieGrid>

      <ScrollButton 
        className="right" 
        onClick={() => handleScroll('right')}
        disabled={gridRef.current && scrollPosition >= gridRef.current.scrollWidth - gridRef.current.clientWidth}
      >
        <ChevronRight size={24} />
      </ScrollButton>
    </Section>
  );
};

export default MovieList;
