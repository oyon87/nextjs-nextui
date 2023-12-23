import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Spinner,
} from "@nextui-org/react";

function ProductTable({ ariaLabel = "Default Table", tableHeaders, tableRows, page, pages, onChange }) {
  return (
    <Table
      aria-label={ariaLabel}
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={onChange}
          />
        </div>
      }
    >
      <TableHeader>
        {tableHeaders.map((item, index) => (
          <TableColumn key={index}>{item}</TableColumn>
        ))}
      </TableHeader>
      <TableBody emptyContent={<Spinner label="Loading..." />}>
        {tableRows.map((item) => {
          return (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.brand}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.stock}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default ProductTable;
