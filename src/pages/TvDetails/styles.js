import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background-color: #221112;
  font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;
`;

const Content = styled.div`
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1200px) {
    padding: 2rem 10rem;
  }
`;

const MovieBanner = styled.div`
  background-image: ${props => `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url(${props.image})`};
  background-size: cover;
  background-position: center;
  min-height: 300px;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;

  @media (min-width: 768px) {
    min-height: 400px;
    padding: 2rem;
  }

  h1 {
    font-size: 1.5rem !important;

    @media (min-width: 768px) {
      font-size: 2rem !important;
    }
  }
`;

const CastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1.5rem;
  }
`;

const CastCard = styled.div`
  text-align: center;

  p {
    font-size: 0.9rem;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const CastImage = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  margin-bottom: 0.5rem;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
    margin-top: 2rem;
  }
`;

const ReviewCard = styled.div`
  background-color: #472426;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    padding: 1.5rem;
    font-size: 1rem;
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  color: white;
  font-size: 1.25rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const InfoSection = styled.div`
  margin-top: 1rem;
  
  h2 {
    font-size: 1.25rem !important;
    margin-bottom: 1rem !important;

    @media (min-width: 768px) {
      font-size: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }
  }

  p {
    font-size: 0.9rem;
    line-height: 1.6;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export { Container, Content, MovieBanner, CastGrid, CastCard, CastImage, ReviewContainer, ReviewCard, LoadingWrapper, InfoSection };