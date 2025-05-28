import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #221112;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Plus Jakarta Sans', 'Noto Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`; 