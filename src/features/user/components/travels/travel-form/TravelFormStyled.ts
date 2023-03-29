import styled from 'styled-components';

export const TravelFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  margin-left: 1rem;

  font-weight: 100;
  font-size: 1rem;
  line-height: 30px;
  color: #777;

  label {
    margin-top: 10px;
    font-weight: bold;
    width: 300px;
  }

  input[type='userName'] {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    font-size: 16px;
    width: 80%;
    max-width: 210px;
    height: 40px;
  }

  input[type='travelImage'] {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    font-size: 16px;
    width: 100%;
    max-width: 280px;
    height: 40px;
  }

  select {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    font-size: 16px;
    width: 80%;
    max-width: 100px;
  }

  select {
    max-width: 210px;
  }

  fieldset {
    margin-top: 20px;
    border: none;
  }

  legend {
    font-weight: bold;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    align-items: center;

    input[type='radio'] {
      margin-right: 10px;
    }
  }

  button[type='submit'] {
    width: 40%;
    background-color: #2da4ff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    margin: 0 auto;
    margin-top: 2rem;
  }
`;
