import { Textarea } from '@/components/otherui/Textarea';
import { StarRating } from '@/components/StarRating';

export const Comment = () => {
  return (
    <div className="mt-25 flex flex-col">
      <h3 className="text-base font-medium text-zinc-600 mb-4">
        Write a review
      </h3>
      <Textarea
        className="bg-zinc-100 border borer-zinc-300 placeholder:text-zinc-400 text-zinc-500"
        placeholder="Tell us about your experience in this course"
      />
      <div className="flex justify-between mt-3 items-center">
        <StarRating
          rating={0}
          activeFillColor="#38BDF8"
          inactiveFillColor="#A1A1AA"
          className="w-8 h-8"
          maxWidth={180}
        />
        <button className="px-5 py-3 bg-primary-500 text-zinc-50 rounded-lg">
          Submit review
        </button>
      </div>
    </div>
  );
};
