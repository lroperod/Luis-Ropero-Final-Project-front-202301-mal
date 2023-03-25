import { FC } from 'react';
import { Travel } from '../../../../../shared/models/travel-model';
import TravelCard from '../travel-card/TravelCard';
import { TravelListContainer } from './TravelCardListStyled';

interface TravelCardListProps {
  travels: Travel[];
}

export const TravelCardList: FC<TravelCardListProps> = ({ travels }) => {
  return (
    <TravelListContainer>
      {travels.map(travels => (
        <li className="travels-list" key={travels._id}>
          <TravelCard travel={travels} />
        </li>
      ))}
    </TravelListContainer>
  );
};
