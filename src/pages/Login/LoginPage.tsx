import React from 'react';
import LoginForm from '../../features/user/components/login-form/LoginForm';
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
