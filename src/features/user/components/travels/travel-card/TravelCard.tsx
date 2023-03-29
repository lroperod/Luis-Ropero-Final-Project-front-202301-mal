import React, { FC } from 'react';
import { Travel } from '../../../../../shared/models/travel-model';
import {
  ButtonTravelStyled,
  ImageTravelStyled,
  InfoTravelStyled,
  InputDescriptionStyled,
  NameTravelerStyled,
  TitleTravelStyled,
  TravelCardContainer,
  VaccinesTravelerStyled,
} from './TravelCardStyled';

interface TravelCardProps {
  travel: Travel;
}
const TravelCard: FC<TravelCardProps> = ({ travel }) => {
  return (
    <TravelCardContainer>
      <TitleTravelStyled>{travel.continent}</TitleTravelStyled>
      <ImageTravelStyled>
        {<img src={travel.travelImage} alt={travel.continent}></img>}
      </ImageTravelStyled>
      <InfoTravelStyled>
        <InputDescriptionStyled>Name:</InputDescriptionStyled>
        <NameTravelerStyled>{travel.userName}</NameTravelerStyled>
        <InputDescriptionStyled>Vaccines:</InputDescriptionStyled>
        <VaccinesTravelerStyled>
          <ul>
            {travel.userAssociatedVaccines.map(travel => (
              <li key={travel.nameVaccines}>{travel.nameVaccines}</li>
            ))}
          </ul>
          <ul>
            {travel.travelAssociatedVaccines.map(travel => (
              <li key={travel.nameVaccines}>{travel.nameVaccines}</li>
            ))}
          </ul>
        </VaccinesTravelerStyled>
      </InfoTravelStyled>
      <ButtonTravelStyled>Delete</ButtonTravelStyled>
    </TravelCardContainer>
  );
};
export default TravelCard;
