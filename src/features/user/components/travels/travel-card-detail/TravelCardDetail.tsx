import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import {
  deleteTravelByIdAsync,
  getTravelByIdAsync,
  selectTravels,
} from '../travel-slice';
import {
  ButtonTravelCardDetailStyled,
  DeleteStatusFeedBackError,
  DeleteStatusFeedBackSuccess,
  ImageTravelCardDetailStyled,
  InfoTravelCardDetailStyled,
  InputDescriptionTravelCardDetailStyled,
  NameTravelerCardDetailStyled,
  TitleTravelCardDetailStyled,
  TravelCardDetailContainer,
  VaccinesTravelerCardDetailStyled,
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
    <TravelCardDetailContainer>
      <TitleTravelCardDetailStyled>
        {travel.continent}
      </TitleTravelCardDetailStyled>
      <ImageTravelCardDetailStyled>
        {<img src={travel.travelImage} alt={travel.continent}></img>}
      </ImageTravelCardDetailStyled>
      <InfoTravelCardDetailStyled>
        <InputDescriptionTravelCardDetailStyled>
          Name:
        </InputDescriptionTravelCardDetailStyled>
        <NameTravelerCardDetailStyled>
          {travel.userName}
        </NameTravelerCardDetailStyled>
        <InputDescriptionTravelCardDetailStyled>
          Vaccines:
        </InputDescriptionTravelCardDetailStyled>
        <VaccinesTravelerCardDetailStyled>
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
        </VaccinesTravelerCardDetailStyled>
        {feedBackUser()}
      </InfoTravelCardDetailStyled>

      <ButtonTravelCardDetailStyled
        onClick={() => {
          dispatch(deleteTravelByIdAsync(_id));
        }}
        data-testid="delete"
      >
        Delete
      </ButtonTravelCardDetailStyled>
    </TravelCardDetailContainer>
  );
};

export default TravelCardDetail;
