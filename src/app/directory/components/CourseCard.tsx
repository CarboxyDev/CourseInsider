import { Badge } from '@/components/Badge';
import { StarRating } from '@/components/StarRating';
import Link from 'next/link';

interface CourseCardProps {
  name: string;
  description: string;
  rating: number;
  code: string;
  seats: number;
  link: string;
}

export const CourseCard = (props: CourseCardProps) => {
  const { name, description, rating, code, seats, link } = props;
  return (
    <div className="flex flex-col">
      <div className="mt-9 flex justify-between">
        <div className="flex flex-col gap-y-3">
          <Link
            href={link}
            className="text-zinc-600 font-medium text-xl hover:underline"
          >
            {name}
          </Link>
          <div className="flex gap-x-2">
            <Badge
              text={code}
              size={'lg'}
              color={'neutral'}
              emphasizeText={true}
            />
            <Badge
              text={'Seats left'}
              size={'lg'}
              color={'success'}
              emphasizeText={true}
            />
          </div>
        </div>
        <StarRating
          rating={rating}
          activeFillColor="#FACC15"
          inactiveFillColor="#A1A1AA"
          readonly={true}
          className="w-6 h-6"
        />
      </div>
      <p className="mt-4 text-base text-zinc-500 leading-7 max-h-14 text-ellipsis line-clamp-2">
        {description}
      </p>
    </div>
  );
};
