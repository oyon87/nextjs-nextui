"use client";

import { useState } from "react";
import { insertProduct } from "@/services/product/product";
import { getStateError } from "@/lib/error";
import ProductForm from "../ui/ProductForm";
import ModalAlert from "@/components/ModalAlert/ModalAlert";

function ProductCreatePage() {
  const [modal, setModal] = useState({
    isOpen: false,
    type: "",
    data: "",
  });
  const [form, setForm] = useState({
    title: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    description: "",
  });

  const handleSubmit = async () => {
    try {
      const newProduct = await insertProduct(form);
      setModal({
        isOpen: true,
        type: "insertSuccess",
        data: newProduct,
      });
    } catch (error) {
      setModal(getStateError(error));
    }
  };

  return (
    <>
      <ProductForm form={form} setForm={setForm} handleSubmit={handleSubmit} textButton="Create Product" />
      <ModalAlert dataModal={modal} />
    </>
  );
}

export default ProductCreatePage;
