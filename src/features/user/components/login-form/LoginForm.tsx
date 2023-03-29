import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import Loading from '../../../../shared/components/loading/loading/loading';
import { getNewUserTokenAsync, selectUser } from '../../user-slice';

import {
  ButtonFormStyled,
  LoginFormStyled,
  LoginStatusFeedBackError,
  LoginStatusFeedBackSuccess,
  WelcomeMessageStyled,
  MessageVaccination,
  InputFormStyled,
  LabelFormStyled,
} from './LoginFormStyled';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { status, loginStatus, loginMessage } = useAppSelector(selectUser);

  const feedBackUser = () => {
    switch (loginStatus) {
      case 'error':
        return (
          <LoginStatusFeedBackError role={''}>
            {loginMessage}
          </LoginStatusFeedBackError>
        );

      case 'success':
        return (
          <LoginStatusFeedBackSuccess>
            {loginMessage}
            <Navigate to={'/home'} />
          </LoginStatusFeedBackSuccess>
        );

      default:
        return;
    }
  };

  return (
    <>
      <LoginFormStyled
        data-testid="login-form"
        onSubmit={e => {
          e.preventDefault();
          dispatch(getNewUserTokenAsync(e.currentTarget));
        }}
      >
        <>
          <WelcomeMessageStyled>
            Welcome to Pre-travel
            <MessageVaccination>Vaccination</MessageVaccination>
          </WelcomeMessageStyled>
          <LabelFormStyled htmlFor="email">Email</LabelFormStyled>

          <InputFormStyled
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            required
          />
          <LabelFormStyled htmlFor="password">Password</LabelFormStyled>
          <InputFormStyled
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            required
          />
          <ButtonFormStyled type="submit" disabled={status === 'loading'}>
            LOGIN
          </ButtonFormStyled>
        </>
        {status === 'loading' ? <Loading></Loading> : feedBackUser()}
      </LoginFormStyled>
    </>
  );
};

export default LoginForm;
