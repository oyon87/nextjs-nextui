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
  Skeleton,
} from "@nextui-org/react";

export default function testAPI() {
  const [page, setPage] = React.useState(1);
  const [pages, setPages] = React.useState(1);
  const [products, setProducts] = React.useState([]);
  const rowsPerPage = 10;

  const fetchData = async () => {
    const start = (page - 1) * rowsPerPage;
    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${start}&select=title,price,brand,category`
    );
    const data = await response.json();
    setProducts(data.products);
    const totalPages = Math.ceil(Number(data.total) / rowsPerPage);
    setPages(totalPages);
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
      )}
    </>
  );
}
