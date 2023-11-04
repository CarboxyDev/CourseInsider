import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { SendResponse } from '@/lib/api';
import { getUserFromSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';

export async function GET_JOIN(req: Request, res: Response) {
  const session = await getServerSession(authOptions);
  const getUser = await getUserFromSession(session);
  const user = getUser.user;

  if (!user) {
    return getUser.errorResponse;
  }
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');

  if (code) {
    try {
      const college = await prisma.college.findFirstOrThrow({
        where: {
          joinCode: code,
        },
      });
      console.log(college);

      try {
        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            collegeId: college.id,
          },
        });
        console.log('A user joined a college');
        return SendResponse(
          JSON.stringify({
            invalid: false,
            name: college.name,
          }),
          200
        );
      } catch (error) {
        return SendResponse('An error occured', 500);
      }
    } catch (error) {
      /** The user entered an invalid join code */
      return SendResponse(
        JSON.stringify({
          invalid: true,
        }),
        200
      );
    }
  }

  return SendResponse('Invalid query', 400);
}
