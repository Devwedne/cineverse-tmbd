import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Nav, Form, Dropdown } from 'react-bootstrap';

const HeaderWrapper = styled.header`
  background-color: #221112;
  border-bottom: 1px solid #472426;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (min-width: 768px) {
    padding: 1rem 2.5rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  text-decoration: none;
  font-size: 1.25rem;

  &:hover {
    color: white;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SearchInput = styled(Form.Control)`
  background-color: #472426 !important;
  border: none !important;
  color: white !important;
  padding-left: 2.5rem !important;
  width: 100%;
  max-width: 300px;
  
  &::placeholder {
    color: #c89295 !important;
  }

  &:focus {
    box-shadow: none !important;
    background-color: #5c2e31 !important;
  }

  @media (max-width: 767px) {
    display: ${props => props.isMobileSearchVisible ? 'block' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-width: 100%;
    border-radius: 0 !important;
    padding: 1rem 3rem !important;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  max-width: 300px;
  width: 100%;

  @media (max-width: 767px) {
    position: static;
  }

  .search-icon {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #c89295;
    z-index: 1;

    @media (max-width: 767px) {
      display: ${props => props.isMobileSearchVisible ? 'block' : 'none'};
      left: 1rem;
    }
  }
`;

const StyledNav = styled(Nav)`
  .nav-link {
    color: white;
    transition: color 0.2s;
    white-space: nowrap;

    &:hover {
      color: #e92932;
    }
  }

  @media (max-width: 767px) {
    display: ${props => props.isMobileMenuVisible ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #221112;
    flex-direction: column;
    padding: 1rem;
    border-top: 1px solid #472426;
    border-bottom: 1px solid #472426;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    .nav-link {
      padding: 0;
      font-size: 1.1rem;
    }
  }
`;

const MobileUserSection = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 0;
    border-top: 1px solid #472426;
  }
`;

const MobileUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: white;
  padding-top: 1rem;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 1px solid #c89295;
  }

  span {
    font-size: 1rem;
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #e92932;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: #d1252d;
  }
`;

const UserAvatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const StyledDropdown = styled(Dropdown)`
  .dropdown-toggle::after {
    display: none;
  }

  .dropdown-menu {
    background-color: #472426;
    border: none;
    margin-top: 0.5rem;

    @media (max-width: 767px) {
      position: fixed;
      width: 100%;
      border-radius: 0;
      margin-top: 0;
    }
  }

  .dropdown-item {
    color: white;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      background-color: #5c2e31;
    }

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

const MobileControls = styled.div`
  display: none;
  gap: 1rem;
  align-items: center;

  @media (max-width: 767px) {
    display: flex;
  }

  button {
    background: none;
    border: none;
    color: white;
    padding: 0.25rem;
    cursor: pointer;

    &:hover {
      color: #e92932;
    }
  }
`;

const DesktopControls = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
`;

export {
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
  DesktopControls,
}