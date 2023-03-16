import styled from 'styled-components';

export const LoginFormStyled = styled.form`
  max-width: 100%;
  padding: 2rem;
  color: #333;
  display: flex;
  flex-direction: column;
  border: 2px solid lightgray;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const LabelFormStyled = styled.label`
  color: #333;
  text-align: left;
  margin-bottom: 0.8rem;
`;

export const InputFormStyled = styled.input`
  background: white;
  color: #333;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  background: white;
  border: 2px solid lightgray;
`;

export const ButtonFormStyled = styled.button`
  width: 100%;
  border-radius: 20px;
  margin: 1rem auto;
  background: #2da4ff;
  color: white;
  padding: 1rem;
  border: 0 solid transparent;
  :hover {
    background: teal;
    color: lime;
  }
`;

export const InfoSignUpStyled = styled.div`
  color: gray;
  text-align: right;
  span {
    color: #2da4ff;
    padding-left: 0.5rem;
    :hover {
      color: orange;
      cursor: pointer;
    }
  }
`;

export const WelcomeMessageStyled = styled.p`
  margin: 0.2rem;
  font-size: 25px;
  p:nth-of-type(2) {
    color: #2da4ff;
    font-weight: bold;
  }
`;
