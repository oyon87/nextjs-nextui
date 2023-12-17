'use client';

import { getAuthorizationHeader } from '@/lib/headers';

const PRODUCT_URL = process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_PRODUCTS_PATH;

const getProducts = async (limit, skip) => {
  const header = await getAuthorizationHeader();

  const data = {
    products: '',
    status: ''
  };

  const response = await fetch(`${PRODUCT_URL}?limit=${limit}&skip=${skip}&select=title,price,brand,category`, { headers: header })
    .then(res => res);

  data.status = response.status;
  data.products = await response.json();

  return data;
};

export { getProducts };
