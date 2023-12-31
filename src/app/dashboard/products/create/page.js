"use client";

import { useState } from "react";
import { Button } from "@nextui-org/react";
import { insertProduct } from "@/services/product/product";
import { getStateError } from "@/lib/error";
import ProductForm from "../ui/ProductForm";
import ModalAlert from "@/components/ModalAlert/ModalAlert";

function ProductCreatePage() {
  const size = "md";
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
      <form action={handleSubmit}>
        <ProductForm form={form} setForm={setForm} />
        <div className="flex justify-center mt-5">
          <Button type="submit" color="primary" size={size}>
            Create Product
          </Button>
        </div>
      </form>
      <ModalAlert dataModal={modal} />
    </>
  );
}

export default ProductCreatePage;
