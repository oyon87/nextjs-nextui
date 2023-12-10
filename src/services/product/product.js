const PRODUCT_URL = process.env.NEXT_PUBLIC_API_URL + "/products";

const getProducts = async (limit, skip) => {
  let response;
  await fetch(`${PRODUCT_URL}?limit=${limit}&skip=${skip}&select=title,price,brand,category`)
    .then((res) => res.json())
    .then(data => response = data);

  return response;
};

export { getProducts };
