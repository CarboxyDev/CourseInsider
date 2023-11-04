import { StarRating } from '@/components/StarRating';
import { MockReviews } from '@/lib/mockup';
import Image from 'next/image';

const Reviews = () => {
  return (
    <div>
      {MockReviews.map((review) => {
        return (
          <div
            key={review.id}
            className="flex flex-row border-b border-zinc-100 mt-9"
          >
            <div className="w-10">
              <Image
                height={40}
                width={40}
                src={`https://api.dicebear.com/7.x/adventurer/png?seed=${
                  review.id + review.author + review.comment.length
                }`}
                className="rounded-full w-10 h-10 border border-zinc-200"
                alt="avatar"
              />
            </div>
            <div className="flex flex-col ml-6 w-full">
              <div className="flex flex-row">
                <div className="mr-auto">
                  <span className="text-zinc-600 font-medium block">
                    {review.author}
                  </span>
                  <span className="text-zinc-400 font-light">
                    {review.reviewedOn.toLocaleDateString()}
                  </span>
                </div>
                <StarRating
                  rating={review.rating}
                  readonly={true}
                  activeFillColor="#38BDF8"
                  inactiveFillColor="#a1a1aa"
                  className="w-6 h-6"
                />
              </div>
              <div className="mt-4 mb-9 font-light text-zinc-600">
                {review.comment}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
