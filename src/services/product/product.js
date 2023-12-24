"use client";

import { getHeader } from "@/lib/header";

const PRODUCT_URL = process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_PRODUCTS_PATH;

const getProducts = async (limit, skip, search) => {
  const data = {
    products: "",
    status: "",
  };

  const response = await fetch(`${PRODUCT_URL}/search?q=${search}&limit=${limit}&skip=${skip}`, {
    headers: getHeader(),
  }).then((res) => res);

  data.status = response.status;
  data.products = await response.json();

  return data;
};

const getDetailProduct = async (id) => {
  const response = await fetch(`${PRODUCT_URL}/${id}`, {
    headers: getHeader(),
  });

  return response;
};

export { getProducts, getDetailProduct };
