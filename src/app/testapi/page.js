"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";
import TableSkeleton from "./tableskeleton";
import { getProducts } from "@/services/product/product";
import { ROW_PER_PAGE } from "@/constant/pagination";
import { startPage, totalPages } from "@/utility/pagination";

export default function TestAPI() {
  const [page, setPage] = React.useState(1);
  const [pages, setPages] = React.useState(0);
  const [products, setProducts] = React.useState([]);

  const fetchData = async () => {
    const start = startPage(page);
    const data = await getProducts(ROW_PER_PAGE, start);
    setProducts(data.products);
    const totalPage = totalPages(data.total);
    setPages(totalPage);
  };

  React.useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      {products.length ? (
        <Table
          aria-label="Example static collection table"
          bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="secondary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
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
            {products.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.brand}</TableCell>
                  <TableCell>{item.category}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <TableSkeleton />
      )}
    </>
  );
}
