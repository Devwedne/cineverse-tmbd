import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  min-height: 100vh;
  background-color: #221112;
  align-items: center;
  justify-content: center;
  display: flex;
  font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;
`;

const LoginCard = styled.div`
  background-color: #472426;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  color: white;
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
  }
`;

const StyledForm = styled(Form)`
  .form-control {
    background-color: #663336 !important;
    border: none !important;
    color: white !important;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;

    &::placeholder {
      color: #c89295;
    }

    &:focus {
      box-shadow: none !important;
      background-color: #7a3d40 !important;
    }
  }

  .btn-primary {
    background-color: #e92932;
    border: none;
    padding: 0.75rem;
    font-weight: 600;
    width: 100%;

    &:hover, &:focus {
      background-color: #d1252d;
    }

    &:disabled {
      background-color: #8b4649;
    }
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #c89295;
  margin: 1.5rem 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #663336;
  }

  &::before {
    margin-right: .5rem;
  }

  &::after {
    margin-left: .5rem;
  }
`;

const RegisterButton = styled(Button)`
  background-color: transparent;
  border: 1px solid #c89295;
  color: #c89295;
  padding: 0.75rem;
  font-weight: 600;
  width: 100%;

  &:hover, &:focus {
    background-color: #663336;
    border-color: #c89295;
    color: white;
  }
`;

export { LoginWrapper, LoginCard, Logo, StyledForm, Divider, RegisterButton }