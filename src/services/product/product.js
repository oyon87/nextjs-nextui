"use server";

import { headers } from 'next/headers';

const PRODUCT_URL = process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_PRODUCTS_PATH;
const headersList = headers();
const authorization = headersList.get('Authorization') || '';
const header = {
  'Authorization': authorization,
  'Content-Type': 'application/json'
};

const getProducts = async (limit, skip) => {
  const data = {
    products: '',
    status: ''
  };

  await fetch(`${PRODUCT_URL}?limit=${limit}&skip=${skip}&select=title,price,brand,category`, { headers: header })
    .then((res) => {
      data.status = res.status;
      return res.json();
    })
    .then(response => data.products = response);

  return data;
};

export { getProducts };
