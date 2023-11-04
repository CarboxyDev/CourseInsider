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

interface GradingTableProps {
  courseId: string;
}

interface GradingComponent {
  label: string;
  weight: string;
}

interface ApiData {
  id: string;
  courseId: string;
  data: string;
}

export const GradingTable = (props: GradingTableProps) => {
  const { courseId } = props;

  const { data, error, status } = useQuery({
    queryKey: ['grading'],
    queryFn: async () => {
      const { data } = await axios.get(
        `/api/course/?q=grading&courseid=${courseId}`
      );

      return JSON.parse(data) as ApiData;
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
          No Grading structure provided
        </div>
      );
    }
    const grading = JSON.parse(data.data) as GradingComponent[];

    if (grading.length == 0) {
      return (
        <div className="flex justify-center text-zinc-700 text-2xl font-semibold">
          No Grading structure provided
        </div>
      );
    }

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/2 font-medium text-base text-zinc-600">
              Type of Evaluation
            </TableHead>
            <TableHead className="w-1/2 font-medium text-base text-zinc-600">
              Contribution in Grade (in %)
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {grading.map((comp: GradingComponent, index: number) => (
            <TableRow key={index}>
              <TableCell className="text-zinc-500 text-base w-1/2">
                {comp.label}
              </TableCell>
              <TableCell className="text-zinc-500 text-base w-1/2">
                {comp.weight}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );

    return <></>;
  }
};
