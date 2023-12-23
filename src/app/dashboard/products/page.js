"use client";

import React from "react";
import { getProducts } from "@/services/product/product";
import { ROW_PER_PAGE } from "@/constant/pagination";
import { startPage, totalPages } from "@/utility/pagination";
import ProductTable from "@/ui/products/ProductsTable";
import ModalAlert from "@/components/ModalAlert/ModalAlert";

function ProductListing() {
  const tableHeaders = ["TITLE", "BRAND", "CATEGORY", "PRICE", "STOCK"];

  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);
  const [dataProducts, setDataProducts] = React.useState({});
  const [errorMessage, setErrorMessage] = React.useState("");

  const fetchData = async () => {
    const start = startPage(page);
    const { status, products } = await getProducts(ROW_PER_PAGE, start);

    if (status === 200) {
      setDataProducts(products);
      setTotalPage(totalPages(products.total));
    } else {
      setErrorMessage(products.message);
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
        products={dataProducts}
        page={page}
        totalPage={totalPage}
        onChange={(page) => setPage(page)}
      />
      <ModalAlert text={errorMessage} isLogin={true} />
    </>
  );
}

export default ProductListing;
