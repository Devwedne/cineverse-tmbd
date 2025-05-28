import styled from 'styled-components';

export const Container = styled.div`
  background-color: #221112;
  min-height: 100vh;
  font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;
`;

export const Content = styled.div`
  padding: 1.25rem 10rem;

  @media (max-width: 767px) {
    padding: 1.25rem 1rem;
  }
`;

export const MovieBanner = styled.div`
  background-image: ${props => `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url(${props.image})`};
  background-size: cover;
  background-position: center;
  min-height: 20rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
`;

export const RatingContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;