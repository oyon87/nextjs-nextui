"use client";

import { getHeader } from "@/lib/header";

const PRODUCT_URL = process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_PRODUCTS_PATH;

const getProducts = async (limit, skip, search) => {
  const response = await fetch(`${PRODUCT_URL}/search?q=${search}&limit=${limit}&skip=${skip}`, {
    headers: getHeader(),
  })
    .then((res) => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then((response) => response);

  return response;
};

const getDetailProduct = async (id) => {
  const response = await fetch(`${PRODUCT_URL}/${id}`, {
    headers: getHeader(),
  });

  return response;
};

export { getProducts, getDetailProduct };
