import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = async () => {
      const storedUser = localStorage.getItem('userData');
      
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        
        try {
          await api.get('/account', {
            params: {
              session_id: userData.sessionId
            }
          });
          
          setUser(userData);
        } catch (error) {
          console.error('Sessão expirada:', error);
          localStorage.removeItem('userData');
          navigate('/login');
        }
      }
      
      setLoading(false);
    };

    initializeAuth();
  }, [navigate]);

  const login = async (username, password) => {
    try {
      const tokenResponse = await api.get('/authentication/token/new');
      const requestToken = tokenResponse.data.request_token;

      await api.post('/authentication/token/validate_with_login', {
        username,
        password,
        request_token: requestToken
      });

      const sessionResponse = await api.post('/authentication/session/new', {
        request_token: requestToken
      });

      const accountResponse = await api.get('/account', {
        params: {
          session_id: sessionResponse.data.session_id
        }
      });

      const userData = {
        sessionId: sessionResponse.data.session_id,
        accountId: accountResponse.data.id,
        username: accountResponse.data.username,
        name: accountResponse.data.name,
        avatar: accountResponse.data.avatar?.tmdb?.avatar_path
          ? `https://image.tmdb.org/t/p/original${accountResponse.data.avatar.tmdb.avatar_path}`
          : 'https://via.placeholder.com/150?text=Avatar'
      };

      localStorage.setItem('userData', JSON.stringify(userData));
      setUser(userData);
      return true;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userData');
    navigate('/login');
  };

  if (loading) {
    return null; // ou um componente de loading
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}; 