import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { LoginWrapper, LoginCard, Logo, StyledForm, Divider, RegisterButton } from './styles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login, user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(username, password);
      
      if (success) {
        navigate('/');
      } else {
        setError('Nome de usuário ou senha inválidos');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro ao tentar fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = () => {
    window.open('https://www.themoviedb.org/signup', '_blank');
  };

  return (
    <LoginWrapper>
      <LoginCard>
        <Logo>
          <h1>CineVerse</h1>
        </Logo>

        {error && (
          <Alert variant="danger" className="mb-4">
            {error}
          </Alert>
        )}

        <StyledForm onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button 
            type="submit" 
            disabled={isLoading || !username || !password}
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </Button>
        </StyledForm>

        <Divider>ou</Divider>

        <RegisterButton
          variant="outline-light"
          onClick={handleRegister}
        >
          Criar uma conta
        </RegisterButton>
      </LoginCard>
    </LoginWrapper>
  );
};

export default Login;