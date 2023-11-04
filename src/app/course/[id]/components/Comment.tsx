import { Textarea } from '@/components/otherui/Textarea';
import { StarRating } from '@/components/StarRating';
import { getErrorMessage } from '@/lib/api';
import { notify, notifyPromise } from '@/lib/notify';
import {
  QueryObserverResult,
  RefetchOptions,
  useMutation,
} from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

interface CommentProps {
  courseId: string;
  refetchFn: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<any, Error>>;
}

export const Comment = (props: CommentProps) => {
  const { courseId, refetchFn } = props;

  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');
  const [disabled, setDisabled] = useState(false);

  const postReview = useMutation({
    mutationFn: async () => {
      const review = {
        rating: rating,
        comment: content,
      };

      const postReviewPromise = axios.post(
        `/api/course?action=review&courseid=${courseId}`,
        review,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const feedbackToast = notifyPromise(postReviewPromise, {
        loading:
          content.length != 0
            ? 'Posting the review...'
            : 'Posting the rating...',
        success:
          content.length != 0 ? 'Posted the review!' : 'Posted the rating!',
        error: (error) => getErrorMessage(error),
      });

      return postReviewPromise;
    },
    onSuccess: () => {
      console.log('Successfully posted review');
      refetchFn();
    },
    onSettled: () => {
      setContent('');
      setDisabled(false);
    },
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('Submitting comment');
    if (rating == 0) {
      notify('You cannot rate 0 stars!', 'warning');
      return;
    }
    setDisabled(true);
    postReview.mutate();
  };
  console.log(disabled);

  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-medium text-zinc-600 mb-4">Write a review</h3>
      <Textarea
        className="bg-zinc-100 text-base h-32 border borer-zinc-300 placeholder:text-zinc-400 text-zinc-500"
        placeholder="Tell us about your experience in this course. Leave blank for rating only."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={disabled}
      />
      <div className="flex justify-between mt-3 items-center">
        <StarRating
          rating={rating}
          setRating={setRating}
          activeFillColor="#38BDF8"
          inactiveFillColor="#A1A1AA"
          className="w-8 h-8"
          maxWidth={180}
        />
        <button
          onClick={(e) => handleSubmit(e)}
          className="px-5 py-3 bg-primary-500 text-zinc-50 rounded-lg disabled:opacity-50"
          disabled={disabled}
        >
          Submit review
        </button>
      </div>
    </div>
  );
};
