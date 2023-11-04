import { GET_JOIN } from '@/app/api/join/get';

export async function GET(req: Request, res: Response) {
  return GET_JOIN(req, res);
}
