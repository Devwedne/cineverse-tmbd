import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';
import {
  FooterWrapper,
  FooterContent,
  FooterLinks,
  FooterLogo,
  FooterCopyright
} from './styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterLogo>
            CineVerse
          </FooterLogo>
          
          <FooterLinks>
            <Link to="/">Início</Link>
            <Link to="/movies">Filmes</Link>
            <Link to="/tv">Séries</Link>
          </FooterLinks>

          <FooterCopyright>
            <p>Desenvolvido  usando a API do TMDB</p>
            <p>&copy; {currentYear} CineVerse. Todos os direitos reservados.</p>
          </FooterCopyright>
        </FooterContent>
      </Container>
    </FooterWrapper>
  );
};

export default Footer; 
