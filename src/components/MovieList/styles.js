import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 2rem;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const Title = styled.h2`
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1.5rem;
  }
`;

const MovieCard = styled.a`
  text-decoration: none;
  color: white;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    color: white;
  }
`;

const MovieImage = styled.div`
  width: 100%;
  aspect-ratio: 2/3;
  border-radius: 0.5rem;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  margin-bottom: 0.5rem;
`;

const MovieTitle = styled.h3`
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0.5rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const MovieInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #c89295;
  font-size: 0.75rem;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
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
  color: #c89295;
  font-size: 0.75rem;
`;

export { Section, Title, MovieGrid, MovieCard, MovieImage, MovieTitle, MovieInfo, Rating, MediaType };