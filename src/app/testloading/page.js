import React from "react";

export default async function TestLoading() {
  const response = await fetch(`https://dummyjson.com/products?limit=10&skip=0&select=title,price,brand,category`);
  const data = await response.json();
  const products = data.products;

  return (
    <>
      <ul>
        {products.map((product) => (
          <li>{product.brand}</li>
        ))}
      </ul>
    </>
  );
}
