import React from 'react';
import {
  ButtonFormStyled,
  InfoSignUpStyled,
  LoginFormStyled,
  WelcomeMessageStyled,
} from './LoginFormStyled';
import { InputFormStyled } from './LoginFormStyled';
import { LabelFormStyled } from './LoginFormStyled';

const LoginForm = () => {
  return (
    <>
      <LoginFormStyled>
        <WelcomeMessageStyled>
          <p>Welcome to Pre-travel</p>
          <p>Vaccination</p>
        </WelcomeMessageStyled>
        <LabelFormStyled htmlFor="email">Email</LabelFormStyled>

        <InputFormStyled
          type="email"
          placeholder="Introduce tu email"
          name="email"
          id="email"
          required
        />
        <LabelFormStyled htmlFor="password">Contraseña</LabelFormStyled>
        <InputFormStyled
          type="password"
          placeholder="Introduce tu contraseña"
          name="password"
          id="password"
          required
        />
        <ButtonFormStyled type="submit">LOGIN</ButtonFormStyled>
        <InfoSignUpStyled>
          <p>
            ¿No tienes cuenta?<span>Regístrate</span>
          </p>
        </InfoSignUpStyled>
      </LoginFormStyled>
    </>
  );
};

export default LoginForm;
