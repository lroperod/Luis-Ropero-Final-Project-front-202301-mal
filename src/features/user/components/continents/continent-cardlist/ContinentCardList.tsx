import React, { FC } from 'react';
import { Continent } from '../../../../../shared/data/continent';
import ContinentCard from '../continent-card/ContinentCard';

interface ContinentCardListProps {
  continents: Continent[];
}

const ContinentCardList: FC<ContinentCardListProps> = ({ continents }) => {
  return (
    <div>
      {continents.map(continent => (
        <li key={continent.nameContinent}>
          <ContinentCard
            nameContinent={continent.nameContinent}
            imageURL={continent.imageURL}
            alt={continent.alt}
          />
        </li>
      ))}
      ;
    </div>
  );
};

export default ContinentCardList;
