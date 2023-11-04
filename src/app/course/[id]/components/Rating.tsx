import { Rating, ThinStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

interface RatingProps {
  rating: number;
}

const RatingStars = (props: RatingProps) => {
  const { rating } = props;

  return (
    <Rating
      style={{ maxWidth: 100 }}
      value={rating}
      readOnly
      itemStyles={{
        itemShapes: ThinStar,
        activeFillColor: '#facc15',
        inactiveFillColor: '#a1a1aa',
      }}
      className="w-6 h-6"
    />
  );
};

export default RatingStars;
