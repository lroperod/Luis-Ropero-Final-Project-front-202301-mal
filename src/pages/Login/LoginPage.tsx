import React from 'react';
import LoginForm from '../../features/users/LoginForm';
import { ImageLoginStyled, MainContainer } from './LoginPageStyled';

const LoginPage = () => {
  return (
    <MainContainer>
      <ImageLoginStyled />
      <LoginForm />
    </MainContainer>
  );
};

export default LoginPage;
