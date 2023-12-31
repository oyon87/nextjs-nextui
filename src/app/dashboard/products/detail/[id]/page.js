"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getDetailProduct } from "@/services/product/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ModalAlert from "@/components/ModalAlert/ModalAlert";
import ImagesGallery from "@/components/ImagesGallery/ImagesGallery";
import ProductDetailSkeleton from "./ui/ProductDetailSkeleton";
import Rating from "@/components/Rating/Rating";
import { getStateError } from "@/lib/error";

function DetaisProductPage({ params }) {
  const router = useRouter();
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState({
    isOpen: false,
    type: "",
    data: "",
  });

  const getDetailProductData = async () => {
    try {
      const product = await getDetailProduct(params.id);
      setProduct(product);
    } catch (error) {
      setModal(setModal(getStateError(error)));
    }
  };

  useEffect(() => {
    getDetailProductData();
  }, []);

  return (
    <>
      {product.title ? (
        <div className="relative grid grid-cols-1 md:grid-cols-6 gap-y-5 md:gap-5 mb-10">
          <a href="#" onClick={() => router.back()} className="absolute -top-9 right-0 md:top-0 md:right-4 ">
            <FontAwesomeIcon icon={faArrowLeft} />
          </a>
          <div className="col-span-2">
            <ImagesGallery images={product.images} />
          </div>
          <div className="col-span-4">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <h2 className="text-xl mb-3">${product.price}</h2>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <p>Stock: {product.stock}</p>
            <Rating rating={product.rating} />
            <div className="w-3/5">
              Description:
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <ProductDetailSkeleton />
      )}
      <ModalAlert dataModal={modal} />
    </>
  );
}

export default DetaisProductPage;
