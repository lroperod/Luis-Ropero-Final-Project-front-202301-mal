import React from 'react';
import ContinentCardList from '../../features/user/components/continents/continent-cardlist/ContinentCardList';
import { continents } from '../../shared/data/continent';
import { HomeStyled } from './HomePageStyled';

export const HomePage = () => {
  return (
    <HomeStyled>
      <ContinentCardList continents={continents}></ContinentCardList>
    </HomeStyled>
  );
};
