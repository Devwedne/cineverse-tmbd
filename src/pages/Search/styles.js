import styled from 'styled-components';

const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: #221112;
  font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;
`;

const ContentWrapper = styled.div`
  padding: 2rem 10rem;

  @media (max-width: 768px) {
    padding: 2rem 0rem;
  }
`;

const MainContent = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  color: white;
  font-size: 1.5rem;
`;

const ResultsTitle = styled.h2`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    padding-left: 1rem;
  }
`;

const NoResults = styled.div`
  color: white;
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
`;

export { AppWrapper, ContentWrapper, MainContent, LoadingWrapper, ResultsTitle, NoResults };