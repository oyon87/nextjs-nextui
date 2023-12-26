"use client";

import { useState, useEffect } from "react";
import { getProducts } from "@/services/product/product";
import { ROW_PER_PAGE } from "@/constant/pagination";
import { startPage, totalPages } from "@/utility/pagination";
import ProductTable from "@/app/dashboard/products/ui/ProductsTable";
import ModalAlert from "@/components/ModalAlert/ModalAlert";

function ProductListing() {
  const tableHeaders = ["TITLE", "BRAND", "CATEGORY", "PRICE", "STOCK"];

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [dataProducts, setDataProducts] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [search, setSearchValue] = useState("");

  const fetchData = async () => {
    const start = startPage(page);

    try {
      const products = await getProducts(ROW_PER_PAGE, start, search);
      setDataProducts(products);
      setTotalPage(totalPages(products.total));
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setPage(1);
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="w-full">
      <ProductTable
        ariaLabel="Products Table"
        tableHeaders={tableHeaders}
        products={dataProducts}
        page={page}
        totalPage={totalPage}
        onChange={(page) => setPage(page)}
        search={search}
        setSearchValue={setSearchValue}
        handleKeyDown={handleKeyDown}
      />
      <ModalAlert text={errorMessage} isLogin={true} />
    </div>
  );
}

export default ProductListing;
