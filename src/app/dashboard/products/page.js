"use client";

import React from "react";
import { getProducts } from "@/services/product/product";
import { ROW_PER_PAGE } from "@/constant/pagination";
import { startPage, totalPages } from "@/utility/pagination";
import TableDefault from "@/components/TableDefault/TableDefault";
import TableSkeleton from "@/components/TableSkeleton/TableSkeleton";

function ProductListing() {
  const tableHeaders = ["TITLE", "PRICE", "BRAND", "CATEGORY"];

  const [page, setPage] = React.useState(1);
  const [pages, setPages] = React.useState(1);
  const [products, setProducts] = React.useState([]);

  const fetchData = async () => {
    const start = startPage(page);
    const { status, products } = await getProducts(ROW_PER_PAGE, start);

    if (status === 200) {
      setProducts(products.products);
      const totalPage = totalPages(products.total);
      setPages(totalPage);
    } else {
      alert(products.message);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      {
        products.length ? (
          <TableDefault
            ariaLabel="Products Table"
            tableHeaders={tableHeaders}
            tableRows={products}
            page={page}
            pages={pages}
            onChange={(page) => setPage(page)}
          />
        ) :
          <TableSkeleton tableHeaders={tableHeaders} />
      }
    </>
  );
}

export default ProductListing;
