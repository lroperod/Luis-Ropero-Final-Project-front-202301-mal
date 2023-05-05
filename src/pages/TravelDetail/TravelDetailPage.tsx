import { useParams } from 'react-router-dom';
import TravelCardDetail from '../../features/user/components/travels/travel-card-detail/TravelCardDetail';

const TravelDetailPage = () => {
  const { _id } = useParams();

  return (
    <section>
      <TravelCardDetail _id={_id ?? ''} />
    </section>
  );
};

export default TravelDetailPage;
