import { LoadingSpinner } from '@/components/Loading';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/otherui/Table';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface PlanComponent {
  week: number;
  content: string;
}

interface WeeklyPlanTableProps {
  courseId: string;
}

interface ApiResponse {
  id: string;
  courseId: string;
  data: string;
}

export const WeeklyPlanTable = (props: WeeklyPlanTableProps) => {
  const { courseId } = props;

  const { data, error, status } = useQuery({
    queryKey: ['weekly-plan'],
    queryFn: async () => {
      const { data } = await axios.get(
        `/api/course/?q=weekly-plan&courseid=${courseId}`
      );

      return JSON.parse(data) as ApiResponse;
    },
  });

  console.log(data);
  if (status == 'pending') {
    return (
      <div className="flex justify-center">
        <LoadingSpinner size={64} />
      </div>
    );
  }
  if (status == 'error') {
    return (
      <div className="flex justify-center text-lg font-semibold">
        {error.message}
      </div>
    );
  }

  if (status == 'success') {
    if (!data.data) {
      return (
        <div className="flex justify-center text-zinc-700 text-2xl font-semibold">
          No weekly plan available for this course
        </div>
      );
    }

    const weeklyPlan = JSON.parse(data.data) as PlanComponent[];
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/5 font-medium text-base text-zinc-600">
              Week Number
            </TableHead>
            <TableHead className="w-4/5 font-medium text-base text-zinc-600">
              Topics
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {weeklyPlan.map((comp, index: number) => (
            <TableRow key={index}>
              <TableCell className="text-zinc-500 text-base w-1/5">
                {comp.week}
              </TableCell>
              <TableCell className="text-zinc-500 text-base w-4/5">
                {comp.content}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
  return <></>;
};
