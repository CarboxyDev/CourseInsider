import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { SendResponse } from '@/lib/api';
import { getUserFromSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';

interface ReviewDetails {
  rating: number;
  comment: string;
}

export async function POST_COURSE(req: Request, res: Response) {
  const session = await getServerSession(authOptions);
  const getUser = await getUserFromSession(session, {
    notLoggedIn: 'You have to be logged in to post reviews',
    invalidAccount: 'You do not have a valid account',
  });

  const user = getUser.user;
  if (!user) {
    return getUser.errorResponse;
  }

  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');
  const courseId = searchParams.get('courseid');

  if (action == 'review' && courseId) {
    const json = await req.json();
    const { rating, comment } = json as ReviewDetails;

    const oldRating = await prisma.course.findUnique({
      where: {
        id: courseId,
      },
      select: {
        rating: true,
        ratingCount: true,
      },
    });

    if (!oldRating) {
      return SendResponse('Course not found', 404);
    }

    const newRating = (
      (oldRating.rating * oldRating.ratingCount + rating) /
      (oldRating.ratingCount + 1)
    ).toFixed(2);

    try {
      await prisma.course.update({
        where: {
          id: courseId,
        },
        data: {
          rating: parseFloat(newRating),
          ratingCount: oldRating.ratingCount + 1,
        },
      });

      if (comment.length) {
        await prisma.review.create({
          data: {
            comment,
            rating,
            courseId: courseId,
            userId: user.id,
            authorName: user.name || user.email || 'Unidentified user',
            authorAvatar: user.image || undefined,
          },
        });
      }
    } catch (error) {
      console.log(error);
      return SendResponse('Failed to post review', 500);
    }

    return SendResponse('Review posted', 200);
  }
}
