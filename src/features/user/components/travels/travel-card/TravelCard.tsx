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
        <NameTravelerStyled>{travel.travelCreator}</NameTravelerStyled>
        <InputDescriptionStyled>Vaccines:</InputDescriptionStyled>
        <VaccinesTravelerStyled>
          {travel.userAssociatedVaccines.map(travel => (
            <li key={travel.nameVaccines}>{travel.nameVaccines}</li>
          ))}
          {travel.travelAssociatedVaccines.map(travel => (
            <li key={travel.nameVaccines}>{travel.nameVaccines}</li>
          ))}
        </VaccinesTravelerStyled>
      </InfoTravelStyled>
      <ButtonTravelStyled>Delete</ButtonTravelStyled>
    </TravelCardContainer>
  );
};
export default TravelCard;
