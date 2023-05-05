import React, { FC, useEffect } from 'react';

import {
  ButtonTravelStyled,
  ImageTravelStyled,
  InfoTravelStyled,
  InputDescriptionStyled,
  NameTravelerStyled,
  TitleTravelStyled,
  TravelCardContainer,
  VaccinesTravelerStyled,
} from '../travel-card/TravelCardStyled';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import {
  deleteTravelByIdAsync,
  getTravelByIdAsync,
  selectTravels,
} from '../travel-slice';
import {
  DeleteStatusFeedBackError,
  DeleteStatusFeedBackSuccess,
} from './TravelCardDetailStyled';

interface TravelCardDetailProps {
  _id: string;
}

const TravelCardDetail: FC<TravelCardDetailProps> = ({ _id }) => {
  const { travel, travelStatus, travelMessage } = useAppSelector(selectTravels);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTravelByIdAsync(_id));
  }, [dispatch, _id]);

  const feedBackUser = () => {
    switch (travelStatus) {
      case 'success':
        return (
          <DeleteStatusFeedBackSuccess data-testid="success-message">
            {travelMessage}
          </DeleteStatusFeedBackSuccess>
        );
      case 'error':
        return (
          <DeleteStatusFeedBackError data-testid="error-message">
            {travelMessage}
          </DeleteStatusFeedBackError>
        );
      default:
        return;
    }
  };
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
        {feedBackUser()}
      </InfoTravelStyled>

      <ButtonTravelStyled
        onClick={() => {
          dispatch(deleteTravelByIdAsync(_id));
        }}
        data-testid="delete"
      >
        Delete
      </ButtonTravelStyled>
    </TravelCardContainer>
  );
};

export default TravelCardDetail;
