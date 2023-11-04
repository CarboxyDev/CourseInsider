import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/otherui/Table';

interface GradingComponent {
  name: string;
  weight: number;
}

interface GradingTableProps {
  gradingComponents: GradingComponent[];
}

export const GradingTable = (props: GradingTableProps) => {
  const { gradingComponents } = props;
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
        {gradingComponents.map((component, i) => (
          <TableRow key={i}>
            <TableCell className="text-zinc-500 text-base w-1/2">
              {component.name}
            </TableCell>
            <TableCell className="text-zinc-500 text-base w-1/2">
              {component.weight}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
