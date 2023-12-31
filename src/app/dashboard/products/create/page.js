"use client";

import { useState } from "react";
import { Button } from "@nextui-org/react";
import ProductForm from "../ui/ProductForm";

function ProductCreatePage() {
  const size = "md";
  const [form, setForm] = useState({
    title: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    description: "",
  });

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <form action={handleSubmit}>
      <ProductForm form={form} setForm={setForm} />
      <div className="flex justify-center mt-5">
        <Button type="submit" color="primary" size={size}>
          Create Product
        </Button>
      </div>
    </form>
  );
}

export default ProductCreatePage;
