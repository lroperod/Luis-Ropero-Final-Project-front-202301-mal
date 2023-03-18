import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getNewUserTokenAsync, selectUser } from '../../user-slice';

import {
  ButtonFormStyled,
  InfoSignUpStyled,
  LoginFormStyled,
  LoginStatusFeedBackError,
  LoginStatusFeedBackLoading,
  LoginStatusFeedBackSuccess,
  WelcomeMessageStyled,
  MessageVaccination,
} from './LoginFormStyled';
import { InputFormStyled } from './LoginFormStyled';
import { LabelFormStyled } from './LoginFormStyled';

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
          <ButtonFormStyled type="submit">LOGIN</ButtonFormStyled>
          <InfoSignUpStyled>
            <p>
              Have no account?<span>Sing up</span>
            </p>
          </InfoSignUpStyled>
        </>
        {status === 'loading' ? (
          <LoginStatusFeedBackLoading>Loading...</LoginStatusFeedBackLoading>
        ) : (
          feedBackUser()
        )}
      </LoginFormStyled>
    </>
  );
};

export default LoginForm;
