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

export default function TableSkeleton() {
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
        <TableColumn>TITLE</TableColumn>
        <TableColumn>PRICE</TableColumn>
        <TableColumn>BRAND</TableColumn>
        <TableColumn>CATEGORY</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>
            <Skeleton className="w-full rounded-full h-5" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full rounded-full h-5" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full rounded-full h-5" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full rounded-full h-5" />
          </TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>
            <Skeleton className="w-full rounded-full h-5" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full rounded-full h-5" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full rounded-full h-5" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full rounded-full h-5" />
          </TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>
            <Skeleton className="w-full rounded-full h-5" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full rounded-full h-5" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full rounded-full h-5" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full rounded-full h-5" />
          </TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>
            <Skeleton className="w-full rounded- full h-5" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full rounded- full h-5" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full rounded- full h-5" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full rounded- full h-5" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
