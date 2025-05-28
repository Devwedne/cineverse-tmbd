import React, { useState } from 'react';
import { Container, Nav, Form, Dropdown } from 'react-bootstrap';
import { Search, LogOut, Menu, X } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  HeaderWrapper, 
  Logo, 
  SearchInput, 
  SearchWrapper, 
  StyledNav, 
  MobileUserSection, 
  MobileUserInfo, 
  LogoutButton, 
  UserAvatar, 
  StyledDropdown, 
  MobileControls, 
  DesktopControls 
} from './styles';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsMobileSearchVisible(false);
    }
  };

  const handleLogout = () => {
    logout();
    setIsMobileMenuVisible(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
    setIsMobileSearchVisible(false);
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchVisible(!isMobileSearchVisible);
    setIsMobileMenuVisible(false);
  };

  return (
    <HeaderWrapper>
      <Container fluid className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-4">
          <Logo to="/">
            <h2 className="fs-4 fw-bold m-0">CineVerse</h2>
          </Logo>
          <StyledNav className="gap-4" isMobileMenuVisible={isMobileMenuVisible}>
            <Nav.Link as={Link} to="/" onClick={() => setIsMobileMenuVisible(false)}>Início</Nav.Link>
            <Nav.Link as={Link} to="/movies" onClick={() => setIsMobileMenuVisible(false)}>Filmes</Nav.Link>
            <Nav.Link as={Link} to="/tv" onClick={() => setIsMobileMenuVisible(false)}>Séries</Nav.Link>
            {user && (
              <MobileUserSection>
                <MobileUserInfo>
                  <img src={user.avatar} alt="Avatar" />
                  <span>{user.name || user.username}</span>
                </MobileUserInfo>
                <LogoutButton onClick={handleLogout}>
                  <LogOut size={20} />
                  Sair
                </LogoutButton>
              </MobileUserSection>
            )}
          </StyledNav>
        </div>

        <MobileControls>
          <button onClick={toggleMobileSearch}>
            <Search size={24} />
          </button>
          <button onClick={toggleMobileMenu}>
            {isMobileMenuVisible ? <X size={24} /> : <Menu size={24} />}
          </button>
        </MobileControls>

        <DesktopControls>
          <Form onSubmit={handleSearch}>
            <SearchWrapper isMobileSearchVisible={isMobileSearchVisible}>
              <Search className="search-icon" size={20} />
              <SearchInput
                type="text"
                placeholder="Buscar filmes e séries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                isMobileSearchVisible={isMobileSearchVisible}
              />
            </SearchWrapper>
          </Form>
          
          {user ? (
            <StyledDropdown>
              <Dropdown.Toggle as={UserAvatar} style={{ border: '1px solid #c89295', backgroundImage: `url('${user.avatar}')` }} />
              <Dropdown.Menu align="end">
                <Dropdown.Item onClick={handleLogout}>
                  <LogOut size={16} />
                  Sair
                </Dropdown.Item>
              </Dropdown.Menu>
            </StyledDropdown>
          ) : (
            <Link to="/login" className="btn btn-danger">
              Entrar
            </Link>
          )}
        </DesktopControls>

        {isMobileSearchVisible && (
          <Form onSubmit={handleSearch} className="position-absolute w-100 top-100 start-0">
            <SearchWrapper isMobileSearchVisible={isMobileSearchVisible}>
              <Search className="search-icon" size={20} style={{ top: '1.75rem' }} />
              <SearchInput
                type="text"
                placeholder="Buscar filmes e séries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                isMobileSearchVisible={isMobileSearchVisible}
                autoFocus
              />
            </SearchWrapper>
          </Form>
        )}
      </Container>
    </HeaderWrapper>
  );
};

export default Header; 