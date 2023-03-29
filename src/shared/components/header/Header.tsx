import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyled } from './HeaderStyled';

export const Header = () => {
  const handleLogout = () => {
    sessionStorage.removeItem('accessToken');
  };
  return (
    <HeaderStyled>
      <div className="logo">
        <img src="/assets/images-header/logo-app.png" alt="logo" />
      </div>
      <nav>
        <Link to={'/home'}>
          <img src="/assets/images-header/home-icon.png" alt="logo" />
          <p>Home</p>
        </Link>
        <Link to={'/travel'}>
          <img src="/assets/images-header/travel-icon.png" alt="logo" />
          <p>My travels</p>
        </Link>
        <Link
          to={'/'}
          onClick={() => handleLogout()}
          data-testid="Log out"
          reloadDocument
        >
          <img src="/assets/images-header/log-out.png" alt="logo" />
          <p>Log out</p>
        </Link>
      </nav>
    </HeaderStyled>
  );
};
