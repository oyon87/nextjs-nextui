const PRODUCT_URL = process.env.NEXT_PUBLIC_API_URL + "/products";

const getProducts = async (limit, skip) => {
  const response = await fetch(`${PRODUCT_URL}?limit=${limit}&skip=${skip}&select=title,price,brand,category`);
  const data = await response.json();

  return data;
};

export { getProducts };
