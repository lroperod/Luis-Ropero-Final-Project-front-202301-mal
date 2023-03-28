import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import TravelForm from '../../features/user/components/travels/travel-form/TravelForm';
import { selectTravels } from '../../features/user/components/travels/travel-slice';
import { TravelFormStatusFeedBackError } from './CreateFormPageStyled';

export const CreateFormPage = () => {
  const { createTravelStatus } = useAppSelector(selectTravels);
  const feedBackUserTravelForm = () => {
    switch (createTravelStatus) {
      case 'error':
        return (
          <TravelFormStatusFeedBackError>
            An error has occurred, try again.
          </TravelFormStatusFeedBackError>
        );

      case 'success':
        return <Navigate to={'/travel'} />;
    }
  };

  return (
    <div>
      <TravelForm></TravelForm>
      {feedBackUserTravelForm()}
    </div>
  );
};

export default CreateFormPage;
