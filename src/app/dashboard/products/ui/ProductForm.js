import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";

function ProductForm({ form, setForm, handleSubmit, textButton = "Submit" }) {
  const size = "md";
  const placement = "outside";
  const variant = "bordered";
  const [isInvalid, setIsInvalid] = useState(false);

  const handleOnChange = (e) => {
    const key = e.target.getAttribute("data-input");
    if (key === "title") {
      setIsInvalid(e.target.value === "");
    }
    setForm({ ...form, [key]: e.target.value });
  };

  return (
    <form action={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-x-8">
        <div className="w-full md:w-1/2">
          <Input
            type="text"
            label="Product Name"
            labelPlacement={placement}
            placeholder="Enter your product name"
            size={size}
            variant={variant}
            className="pt-3"
            isRequired={true}
            isInvalid={isInvalid}
            color={isInvalid ? "danger" : "default"}
            errorMessage={isInvalid && "Product Name is required"}
            value={form.title}
            data-input="title"
            onChange={handleOnChange}
          />
          <Input
            type="number"
            label="Product Price"
            labelPlacement={placement}
            placeholder="Enter your product price"
            size={size}
            variant={variant}
            className="pt-3"
            value={form.price}
            data-input="price"
            onChange={handleOnChange}
          />
          <Input
            type="text"
            label="Product Brand"
            labelPlacement={placement}
            placeholder="Enter your product brand"
            size={size}
            variant={variant}
            className="pt-3"
            value={form.brand}
            data-input="brand"
            onChange={handleOnChange}
          />
          <Input
            type="text"
            label="Product Category"
            labelPlacement={placement}
            placeholder="Enter your product category"
            size={size}
            variant={variant}
            className="pt-3"
            value={form.category}
            data-input="category"
            onChange={handleOnChange}
          />
        </div>
        <div className="w-full md:w-1/2">
          <Input
            type="number"
            label="Product Stock"
            labelPlacement={placement}
            placeholder="Product stock"
            size={size}
            variant={variant}
            className="pt-3"
            value={form.stock}
            data-input="stock"
            onChange={handleOnChange}
          />
          <Input
            type="number"
            label="Discount(%)"
            labelPlacement={placement}
            placeholder="Discount percentage"
            size={size}
            variant={variant}
            className="pt-3"
            value={form.discountPercentage}
            data-input="discountPercentage"
            onChange={handleOnChange}
          />
          <Textarea
            variant={variant}
            label="Description"
            labelPlacement={placement}
            placeholder="Enter your description"
            className="pt-3"
            size={size}
            minRows={4}
            value={form.description}
            data-input="description"
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Button type="submit" color="primary" size={size}>
          {textButton}
        </Button>
      </div>
    </form>
  );
}

export default ProductForm;
