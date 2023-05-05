import styled from 'styled-components';

export const DeleteStatusFeedBackError = styled.div`
  color: red;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 3rem;
`;

export const DeleteStatusFeedBackSuccess = styled.div`
  color: green;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 3rem;
`;

export const TravelCardDetailContainer = styled.article`
  width: 300px;
  margin: 1rem auto;
  user-select: none;
  border-radius: 12px;
  border: 1.5px solid #e4e4e4;
  overflow: hidden;
`;
export const TitleTravelCardDetailStyled = styled.h2`
  font-family: 'arial';
  text-align: center;
  color: white;
  background-color: grey;
  padding: 1rem;
`;
export const ImageTravelCardDetailStyled = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const InfoTravelCardDetailStyled = styled.div`
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
  color: #595959;
  padding: 1rem;
`;
export const NameTravelerCardDetailStyled = styled.p`
  text-align: center;
`;

export const VaccinesTravelerCardDetailStyled = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.8rem;
`;

export const InputDescriptionTravelCardDetailStyled = styled.span`
  font-family: 'arial';
  padding: 0.5rem;
  color: #00599e;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const ButtonTravelCardDetailStyled = styled.button`
  width: 100%;
  background-color: #00599e;
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
