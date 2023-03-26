import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { TravelCardList } from '../../features/user/components/travels/travel-cardlist/TravelCardList';
import {
  getAllTravelsAsync,
  selectTravels,
} from '../../features/user/components/travels/travel-slice';
import { TravelPageStyled } from './TravelPageStyled';

export const TravelPage = () => {
  const dispatch = useAppDispatch();
  const travelState = useAppSelector(selectTravels);
  useEffect(() => {
    dispatch(getAllTravelsAsync());
  }, [dispatch]);
  return (
    <TravelPageStyled>
      <TravelCardList travels={travelState.travels}></TravelCardList>
    </TravelPageStyled>
  );
};
