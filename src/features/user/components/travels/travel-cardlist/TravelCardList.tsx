import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../../app/hooks';

import { APIStatus } from '../../../../../shared/models/api-status';
import { Travel } from '../../../../../shared/models/travel-model';
import TravelCard from '../travel-card/TravelCard';
import { selectTravels } from '../travel-slice';
import {
  TravelListContainer,
  TravelStatusFeedBackError,
  TravelStatusFeedBackLoading,
} from './TravelCardListStyled';

interface TravelCardListProps {
  travels: Travel[];
}

export const TravelCardList: FC<TravelCardListProps> = ({ travels }) => {
  const { status, travelMessage } = useAppSelector(selectTravels);

  switch (status) {
    case APIStatus.IDLE:
      return (
        <TravelListContainer>
          {travels.map(travel => (
            <li className="travels-list" key={travel._id}>
              <TravelCard travel={travel} />
            </li>
          ))}
        </TravelListContainer>
      );
    case APIStatus.LOADING:
      return (
        <TravelStatusFeedBackLoading>
          {travelMessage}
        </TravelStatusFeedBackLoading>
      );
    case APIStatus.ERROR:
      return (
        <TravelStatusFeedBackError role={'paragraph'}>
          {' '}
          There is not travels to show
        </TravelStatusFeedBackError>
      );
  }
};
