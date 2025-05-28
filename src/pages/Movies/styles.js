import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background-color: #221112;
  font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;
`;

const Content = styled.div`
  padding: 2rem 0;

  @media (min-width: 768px) {
    padding: 2rem 2rem;
  }

  @media (min-width: 1200px) {
    padding: 2rem 10rem;
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

export { Container, Content, LoadingWrapper };