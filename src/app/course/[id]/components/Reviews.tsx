import { Comment } from '@/app/course/[id]/components/Comment';
import { LoadingSpinner } from '@/components/Loading';
import { StarRating } from '@/components/StarRating';
import { Review } from '@/lib/types';
import { getShortDate } from '@/lib/util';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';

interface ReviewsProps {
  courseId: string;
}

const Reviews = (props: ReviewsProps) => {
  const { courseId } = props;

  const { data, error, status } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const { data } = await axios.get(
        `/api/course/?q=reviews&courseid=${courseId}`
      );

      return JSON.parse(data);
    },
  });
  if (status == 'pending') {
    return (
      <div className="flex justify-center">
        <LoadingSpinner size={64} />
      </div>
    );
  }
  if (status == 'error') {
    return (
      <div className="flex justify-center text-lg font-semibold">
        Error: {error.message}
      </div>
    );
  }
  if (status == 'success') {
    return (
      <div>
        {data.map((review: Review) => {
          return (
            <div
              key={review.id}
              className="flex flex-row border-b border-zinc-100 mt-9"
            >
              <div className="w-10">
                <Image
                  height={40}
                  width={40}
                  src={`https://api.dicebear.com/7.x/adventurer/png?seed=${review.userId}`}
                  className="rounded-full w-10 h-10 border border-zinc-200"
                  alt="avatar"
                />
              </div>
              <div className="flex flex-col ml-6 w-full">
                <div className="flex flex-row">
                  <div className="mr-auto">
                    <span className="text-zinc-600 font-medium block">
                      {review.authorName}
                    </span>
                    <span className="text-zinc-400 font-light">
                      {getShortDate(new Date(review.reviewedOn))}
                    </span>
                  </div>
                  <StarRating
                    rating={review.rating}
                    readonly={true}
                    activeFillColor="#38BDF8"
                    inactiveFillColor="#a1a1aa"
                    className="w-6 h-6"
                    maxWidth={100}
                  />
                </div>
                <div className="mt-4 mb-9 font-light text-zinc-600">
                  {review.comment}
                </div>
              </div>
            </div>
          );
        })}
        <Comment />
      </div>
    );
  }

  return <></>;
};

export default Reviews;
