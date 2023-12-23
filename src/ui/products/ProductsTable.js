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
import { useEffect, useState } from "react";

function ProductTable({ ariaLabel = "Default Table", tableHeaders, products, page, totalPage, onChange }) {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(products);
  }, [products]);

  return (
    <>
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
              total={totalPage}
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
          {data.products?.map((item) => {
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
      <div className="mt-3">
        <span className="text-default-400 text-small">Total {data.total} products</span>
      </div>
    </>
  );
}

export default ProductTable;
