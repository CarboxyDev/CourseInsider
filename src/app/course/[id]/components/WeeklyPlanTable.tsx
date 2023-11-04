import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/otherui/Table';

interface WeeklyPlanTableComponent {
  week: number;
  topics: string[];
}

interface WeeklyPlanTableProps {
  gradingComponents: WeeklyPlanTableComponent[];
}

export const WeeklyPlanTable = (props: WeeklyPlanTableProps) => {
  const { gradingComponents } = props;
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
        {gradingComponents.map((component, i) => (
          <TableRow key={i}>
            <TableCell className="text-zinc-500 text-base w-1/5">
              {component.week}
            </TableCell>
            <TableCell className="text-zinc-500 text-base w-4/5">
              {component.topics.map((topic, j) => (
                <span key={j}>
                  {topic}
                  {j < component.topics.length - 1 && ','}{' '}
                </span>
              ))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
