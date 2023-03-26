import styled from 'styled-components';

export const TravelCardContainer = styled.article`
  width: 280px;
  margin: 1rem auto;
  user-select: none;
  border-radius: 12px;
  border: 1.5px solid #e4e4e4;
  overflow: hidden;
`;
export const TitleTravelStyled = styled.h2`
  font-family: 'arial';
  text-align: center;
  color: white;
  background-color: grey;
`;
export const ImageTravelStyled = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const InfoTravelStyled = styled.div`
  p {
    padding: 0.5rem;
  }
  p > li {
    text-align: right;
    padding: 0.5rem;
  }
  font-family: 'arial';
  color: grey;
`;
export const NameTravelerStyled = styled.p`
  font-style: italic;
  text-align: right;
`;

export const VaccinesTravelerStyled = styled.p`
  font-style: italic;
`;

export const InputDescriptionStyled = styled.span`
  font-family: 'arial';
  padding: 0.5rem;
  color: #2da4ff;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const ButtonTravelStyled = styled.button`
  width: 100%;
  background-color: #2da4ff;
  border: none;
  box-sizing: border-box;
  min-height: 2rem;
  font-family: 'popins';
  color: white;
  font-size: 1rem;
  font-weight: bold;
`;
