"use client";

import ModalAlert from "@/components/ModalAlert/ModalAlert";
import ProductDetailSkeleton from "./ui/ProductDetailSkeleton";
import { getDetailProduct } from "@/services/product/product";
import { useEffect, useState } from "react";
import ImagesGallery from "@/components/ImagesGallery/ImagesGallery";

function DetaisProductPage({ params }) {
  const [product, setProduct] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const getDetailProductData = async () => {
    const response = await getDetailProduct(params.id);
    const data = await response.json();

    if (response.ok) {
      setProduct(data);
    } else {
      setErrorMessage(data.message);
    }
  };

  useEffect(() => {
    getDetailProductData();
  }, []);

  return (
    <>
      {product.title ? (
        <div className="reative grid grid-cols-6 gap-5">
          <div className="col-span-2">
            <ImagesGallery images={product.images} />
          </div>
          <div className="col-span-4">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <h2 className="text-xl mb-3">${product.price}</h2>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <p>Stock: {product.stock}</p>
            <p>Rating: {product.rating}</p>
            <div className="mt-3">
              Description:
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <ProductDetailSkeleton />
      )}
      <ModalAlert text={errorMessage} isLogin={true} />
    </>
  );
}

export default DetaisProductPage;
