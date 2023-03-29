import styled from 'styled-components';

export const TravelCardContainer = styled.article`
  width: 300px;
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
  padding: 1rem;
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
    padding: 0.8rem;
    display: flex;
    gap: 2rem;
  }
  p > li {
    text-align: center;
    padding: 0.5rem;
  }
  font-family: 'arial';
  color: grey;
  padding: 1rem;
`;
export const NameTravelerStyled = styled.p`
  text-align: center;
`;

export const VaccinesTravelerStyled = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.8rem;
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
  font-family: 'arial';
  text-transform: uppercase;
  font-size: 1.2rem;
  padding: 1rem;
  color: white;
  font-size: 1rem;
  font-weight: bold;
`;
