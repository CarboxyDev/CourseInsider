import { Badge } from '@/components/Badge';
import IconifyIcon from '@/components/IconifyIcon';
import { StarRating } from '@/components/StarRating';
import { Course } from '@/lib/types';
import Link from 'next/link';

interface CourseCardProps {
  course: Course;
}

export const CourseCard = (props: CourseCardProps) => {
  const { course } = props;
  const href = `/course/${course.id}`;

  return (
    <div className="flex flex-col">
      <div className="mt-9 flex justify-between">
        <div className="flex flex-col gap-y-3">
          <Link
            href={href}
            className="text-zinc-600 relative font-medium text-xl hover:underline flex"
          >
            {course.name}
            <IconifyIcon
              icon="clarity:arrow-line"
              className="rotate-45 w-4 h-4"
            />
          </Link>
          <div className="flex gap-x-2">
            <Badge
              text={course.code}
              size={'lg'}
              color={'neutral'}
              emphasizeText={true}
            />
            {course.openSeats > 10 && (
              <Badge
                text="Seats left"
                size={'lg'}
                color={'success'}
                emphasizeText={true}
              />
            )}
            {course.openSeats <= 10 && course.openSeats > 0 && (
              <Badge
                text="Limited seats left"
                size={'lg'}
                color={'warning'}
                emphasizeText={true}
              />
            )}
            {course.openSeats == 0 && (
              <Badge
                text="No seats left"
                size={'lg'}
                color={'danger'}
                emphasizeText={true}
              />
            )}
          </div>
        </div>
        <StarRating
          rating={course.rating}
          activeFillColor="#FACC15"
          inactiveFillColor="#A1A1AA"
          readonly={true}
          className="w-6 h-6"
          maxWidth={100}
        />
      </div>
      <p className="mt-6 text-light text-zinc-500 leading-7 text-ellipsis line-clamp-2">
        {course.description}
      </p>
    </div>
  );
};
