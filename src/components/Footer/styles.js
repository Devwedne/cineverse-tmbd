import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #221112;
  border-top: 1px solid #472426;
  color: #fff;
  padding: 2rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem 0;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #c89295;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #c89295;
`;

const FooterCopyright = styled.div`
  color: #888;
  font-size: 0.9rem;
`; 


export { FooterWrapper, FooterContent, FooterLinks, FooterLogo, FooterCopyright };