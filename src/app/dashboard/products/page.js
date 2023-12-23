"use client";

import React from "react";
import { getProducts } from "@/services/product/product";
import { ROW_PER_PAGE } from "@/constant/pagination";
import { startPage, totalPages } from "@/utility/pagination";
import ProductTable from "@/ui/products/ProductsTable";

function ProductListing() {
  const tableHeaders = ["TITLE", "BRAND", "CATEGORY", "PRICE", "STOCK"];

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
      <ProductTable
        ariaLabel="Products Table"
        tableHeaders={tableHeaders}
        tableRows={products}
        page={page}
        pages={pages}
        onChange={(page) => setPage(page)}
      />
    </>
  );
}

export default ProductListing;
