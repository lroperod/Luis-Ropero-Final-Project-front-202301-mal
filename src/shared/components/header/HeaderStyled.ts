import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background: #00599e;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 1rem;
  }
  .logo img {
    width: 30px;
  }
  nav {
    display: flex;
    align-items: center;
  }
  nav a {
    text-decoration: none;
    font-size: 0.5rem;
    color: white;
    padding: 0.5rem;
    text-align: center;
  }
  nav a p {
    font-size: 10px;
  }

  nav img {
    width: 25px;
  }
`;
