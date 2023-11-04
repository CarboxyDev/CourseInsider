'use client';

import { cn } from '@/lib/util';
import { Rating, ThinStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Dispatch, SetStateAction } from 'react';

interface RatingProps {
  rating: number;
  readonly?: boolean;
  activeFillColor: string;
  inactiveFillColor: string;
  className?: string;
  maxWidth: number;
  setRating?: Dispatch<SetStateAction<number>>;
}

export const StarRating = (props: RatingProps) => {
  const {
    rating,
    setRating,
    readonly,
    activeFillColor,
    inactiveFillColor,
    className,
    maxWidth,
  } = props;

  return (
    <Rating
      style={{ maxWidth: maxWidth }}
      value={rating}
      readOnly={readonly}
      itemStyles={{
        itemShapes: ThinStar,
        activeFillColor: activeFillColor,
        inactiveFillColor: inactiveFillColor,
      }}
      className={cn(className)}
      onChange={setRating}
    />
  );
};
