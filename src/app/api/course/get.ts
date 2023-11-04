import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { SendResponse } from '@/lib/api';
import { getUserFromSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';

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

  if (query == 'fetch-courses') {
    const session = await getServerSession(authOptions);
    const getUser = await getUserFromSession(session);
    const user = getUser.user;

    if (!user) {
      const courses = await prisma.course.findMany({
        where: {
          collegeId: 'demo',
        },
      });
      return SendResponse(
        JSON.stringify({
          college: { name: 'Public View', id: 'demo' },
          courses: courses,
        }),
        200
      );
    }

    try {
      const courses = await prisma.course.findMany({
        where: {
          collegeId: user.collegeId,
        },
      });
      console.log(user.collegeId);

      const college = await prisma.college.findFirst({
        where: {
          id: user.collegeId,
        },
      });

      return SendResponse(
        JSON.stringify({ college: college, courses: courses }),
        200
      );
    } catch {
      return SendResponse('Unable to fetch your couses', 500);
    }
  }

  return SendResponse('Invalid query', 400);
}
