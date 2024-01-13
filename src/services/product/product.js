"use client";

import { getHeader } from "@/lib/header";

const PRODUCT_URL = process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_PRODUCTS_PATH;

const getProducts = async (limit, skip, search) => {
  const response = await fetch(`${PRODUCT_URL}/search?q=${search}&limit=${limit}&skip=${skip}`, {
    headers: getHeader(),
  }).then(async (res) => {
    if (!res.ok) {
      throw await res.json().then((error) => {
        return { message: error.message, status: res.status };
      });
    }
    return await res.json().then((response) => response);
  });

  return response;
};

const getDetailProduct = async (id) => {
  const response = await fetch(`${PRODUCT_URL}/${id}`, {
    headers: getHeader(),
  }).then(async (res) => {
    if (!res.ok) {
      throw await res.json().then((error) => {
        return { message: error.message, status: res.status };
      });
    }
    return await res.json().then((response) => response);
  });

  return response;
};

const deleteProduct = async (id) => {
  const response = await fetch(`${PRODUCT_URL}/${id}`, {
    method: "DELETE",
    headers: getHeader(),
  }).then(async (res) => {
    if (!res.ok) {
      throw await res.json().then((error) => {
        return { message: error.message, status: res.status };
      });
    }
    return await res.json().then((response) => response);
  });

  return response;
};

const insertProduct = async (body) => {
  const response = await fetch(`${PRODUCT_URL}/add`, {
    method: "POST",
    headers: getHeader(),
    body: JSON.stringify(body),
  }).then(async (res) => {
    if (!res.ok) {
      throw await res.json().then((error) => {
        return { message: error.message, status: res.status };
      });
    }
    return await res.json().then((response) => response);
  });

  return response;
};

const updateProduct = async (body) => {
  const id = body.id;
  delete body.id;

  const response = await fetch(`${PRODUCT_URL}/${id}`, {
    method: "PUT",
    headers: getHeader(),
    body: JSON.stringify(body),
  }).then(async (res) => {
    if (!res.ok) {
      throw await res.json().then((error) => {
        return { message: error.message, status: res.status };
      });
    }
    return await res.json().then((response) => response);
  });

  return response;
};

export { getProducts, getDetailProduct, deleteProduct, insertProduct, updateProduct };
