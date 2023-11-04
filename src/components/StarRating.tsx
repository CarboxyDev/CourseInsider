'use client';

import { cn } from '@/lib/util';
import { Rating, ThinStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useState } from 'react';

interface RatingProps {
  rating: number;
  readonly?: boolean;
  activeFillColor: string;
  inactiveFillColor: string;
  className?: string;
  maxWidth: number;
}

export const StarRating = (props: RatingProps) => {
  const {
    rating,
    readonly,
    activeFillColor,
    inactiveFillColor,
    className,
    maxWidth,
  } = props;

  const [currentRating, setCurrentRating] = useState<number>(rating);

  return (
    <Rating
      style={{ maxWidth: maxWidth }}
      value={currentRating}
      readOnly={readonly}
      itemStyles={{
        itemShapes: ThinStar,
        activeFillColor: activeFillColor,
        inactiveFillColor: inactiveFillColor,
      }}
      className={cn(className)}
      onChange={setCurrentRating}
    />
  );
};
