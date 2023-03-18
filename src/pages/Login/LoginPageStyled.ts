import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  align-items: stretch;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ImageLoginStyled = styled.div`
  background-image: url('assets/images-login/login-mobile.webp');
  height: 500px;
  max-width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 1024px) {
    width: 50%;
    height: 100vh;
    background-image: url('assets/images-login/login-desktop.webp');
  }
`;
