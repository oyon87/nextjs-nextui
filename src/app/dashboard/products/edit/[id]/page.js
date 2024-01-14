"use client";

import ModalAlert from "@/components/ModalAlert/ModalAlert";
import ProductForm from "../../ui/ProductForm";
import { getStateError } from "@/lib/error";
import { getDetailProduct, updateProduct } from "@/services/product/product";
import { useEffect, useState } from "react";

function ProductEditPage({ params }) {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    description: "",
  });
  const [modal, setModal] = useState({
    isOpen: false,
    type: "",
    data: "",
  });

  const getProduct = async () => {
    try {
      const productData = await getDetailProduct(params.id);
      setProduct(productData);
    } catch (error) {
      setModal(getStateError(error));
    }
  };

  const handleSubmit = async () => {
    try {
      const updatedProduct = await updateProduct(product);
      setModal({
        isOpen: true,
        type: "updateSuccess",
        data: updatedProduct,
      });
    } catch (error) {
      setModal(getStateError(error));
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <ProductForm form={product} setForm={setProduct} handleSubmit={handleSubmit} textButton="Update Product" />
      <ModalAlert dataModal={modal} />
    </>
  );
}

export default ProductEditPage;
