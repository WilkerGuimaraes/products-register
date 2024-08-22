import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export function TableSkeleton() {
  const rows = Array.from({ length: 20 });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Produto</TableHead>
          <TableHead>Preço</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {rows.map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <div className="animate-pulse-custom h-5 bg-gray-300 animate-pulse rounded"></div>
            </TableCell>
            <TableCell>
              <div className="animate-pulse-custom h-5 bg-gray-300 animate-pulse rounded"></div>
            </TableCell>
            <TableCell>
              <div className="animate-pulse-custom h-5 bg-gray-300 animate-pulse rounded"></div>
            </TableCell>
            <TableCell>
              <div className="animate-pulse-custom h-5 bg-gray-300 animate-pulse rounded"></div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
