import { GET_COURSE } from '@/app/api/course/get';
import { POST_COURSE } from '@/app/api/course/post';

export async function GET(req: Request, res: Response) {
  return GET_COURSE(req, res);
}

export async function POST(req: Request, res: Response) {
  return POST_COURSE(req, res);
}
