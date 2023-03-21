import React from 'react';
import ContinentCardList from '../../features/user/components/continent-cardlist/ContinentCardList';
import { continents } from '../../shared/data/continent';

export const HomePage = () => {
  return <ContinentCardList continents={continents}></ContinentCardList>;
};
