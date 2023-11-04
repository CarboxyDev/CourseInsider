import { cn } from '@/lib/util';
import { Rating, ThinStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

interface RatingProps {
  rating: number;
  activeFillColor: string;
  inactiveFillColor: string;
  className: string;
}

const RatingStars = (props: RatingProps) => {
  const { rating, activeFillColor, inactiveFillColor, className } = props;

  return (
    <Rating
      style={{ maxWidth: 100 }}
      value={rating}
      readOnly
      itemStyles={{
        itemShapes: ThinStar,
        activeFillColor: activeFillColor,
        inactiveFillColor: inactiveFillColor,
      }}
      className={cn(className)}
    />
  );
};

export default RatingStars;
