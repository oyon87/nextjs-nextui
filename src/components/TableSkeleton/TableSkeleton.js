import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Skeleton,
} from "@nextui-org/react";

export default function TableSkeleton({ tableHeaders }) {
  return (
    <Table
      aria-label="Example static collection table"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination isCompact showControls showShadow color="secondary" page="0" total="0" />
        </div>
      }
    >
      <TableHeader>
        {tableHeaders.map((item, index) => (
          <TableColumn key={index}>{item}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          {tableHeaders.map((index) => (
            <TableCell key={index}>
              <Skeleton className="w-full rounded-full h-5" />
            </TableCell>
          ))}
        </TableRow>
        <TableRow key="2">
          {tableHeaders.map((index) => (
            <TableCell key={index}>
              <Skeleton className="w-full rounded-full h-5" />
            </TableCell>
          ))}
        </TableRow>
        <TableRow key="3">
          {tableHeaders.map((index) => (
            <TableCell key={index}>
              <Skeleton className="w-full rounded-full h-5" />
            </TableCell>
          ))}
        </TableRow>
        <TableRow key="4">
          {tableHeaders.map((index) => (
            <TableCell key={index}>
              <Skeleton className="w-full rounded-full h-5" />
            </TableCell>
          ))}
        </TableRow>
        <TableRow key="5">
          {tableHeaders.map((index) => (
            <TableCell key={index}>
              <Skeleton className="w-full rounded-full h-5" />
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
}
