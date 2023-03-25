import React, { FC } from 'react';
import { Travel } from '../../../../../shared/models/travel-model';
import {
  ButtonTravelStyled,
  ImageTravelStyled,
  InfoTravelStyled,
  TitleTravelStyled,
  TravelCardContainer,
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
        <p>{travel.travelCreator}</p>
        <p>
          {travel.userAssociatedVaccines.map(travel => (
            <li key={travel.nameVaccines}>{travel.nameVaccines}</li>
          ))}
        </p>
        <p>
          {travel.travelAssociatedVaccines.map(travel => (
            <li key={travel.nameVaccines}>{travel.nameVaccines}</li>
          ))}
        </p>
      </InfoTravelStyled>
      <ButtonTravelStyled>Delete</ButtonTravelStyled>
    </TravelCardContainer>
  );
};
export default TravelCard;
