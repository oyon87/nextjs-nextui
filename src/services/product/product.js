const getProducts = async (limit, skip) => {
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,brand,category`);
  const data = await response.json();

  return data;
};

export { getProducts };
