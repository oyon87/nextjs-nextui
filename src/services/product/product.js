'use server';

import { headers } from 'next/headers';

// const PRODUCT_URL = process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_PRODUCTS_PATH;
const PRODUCT_URL = 'https://dummyjson.com/products';
const headersList = headers();
const authorization = headersList.get('Authorization') || '';
const header = {
  'Authorization': authorization,
  'Content-Type': 'application/json'
};

const getProducts = async (limit, skip) => {
  let data = {
    products: '',
    status: ''
  };

  let test;

  const response = await fetch(`${PRODUCT_URL}?limit=${limit}&skip=${skip}&select=title,price,brand,category`, { headers: header })
    .then(res => res);

  data.status = response.status;
  // data.products = await response.json();
  test = await response.json();

  return test;
};

export { getProducts };
