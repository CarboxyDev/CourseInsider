import { GET_COURSE } from '@/app/api/course/get';

export async function GET(req: Request, res: Response) {
  return GET_COURSE(req, res);
}
