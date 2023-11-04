import { SendResponse } from '@/lib/api';
import { prisma } from '@/lib/prisma';

export async function GET_COURSE(req: Request, res: Response) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');

  if (query == 'reviews') {
    const courseId = searchParams.get('courseid');
    if (!courseId) {
      return SendResponse(
        'You must provide a courseid to fetch the reviews',
        400
      );
    }
    try {
      const reviews = await prisma.review.findMany({
        where: {
          courseId: courseId,
        },
      });

      return SendResponse(JSON.stringify(reviews), 200);
    } catch (error) {
      return SendResponse('An error occured on the server', 500);
    }
  }

  if (query == 'grading') {
    try {
      const courseId = searchParams.get('courseid');

      if (!courseId) {
        return SendResponse(
          'You must provide a courseid to fetch the grading structure',
          400
        );
      }

      const gradingStructure = await prisma.gradingStructure.findFirst({
        where: {
          courseId: courseId,
        },
      });
      if (!gradingStructure) {
        return SendResponse(JSON.stringify([]), 200);
      }
      return SendResponse(JSON.stringify(gradingStructure), 200);
    } catch (error) {
      return SendResponse('An error occured on the server', 500);
    }
  }

  return SendResponse('Invalid query', 400);
}
