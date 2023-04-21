import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { TravelCardList } from '../../features/user/components/travels/travel-cardlist/TravelCardList';
import {
  getTravelsByEmailCreatorAsync,
  selectTravels,
} from '../../features/user/components/travels/travel-slice';
import { TravelPageStyled } from './TravelPageStyled';
import jwtDecode from 'jwt-decode';

export const TravelPage = () => {
  const dispatch = useAppDispatch();
  const travelState = useAppSelector(selectTravels);
  const token = sessionStorage.getItem('accessToken');
  const decodedToken = token ? (jwtDecode(token) as { email: string }) : null;
  const email = decodedToken?.email || '';
  useEffect(() => {
    dispatch(getTravelsByEmailCreatorAsync(email));
  }, [dispatch, email]);
  return (
    <TravelPageStyled>
      <TravelCardList travels={travelState.travels}></TravelCardList>
    </TravelPageStyled>
  );
};
