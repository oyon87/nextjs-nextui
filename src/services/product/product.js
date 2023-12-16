const PRODUCT_URL = process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_PRODUCTS_PATH;

const getProducts = async (limit, skip) => {
  let data = {
    message: 'error'
  };
  await fetch(`${PRODUCT_URL}?limit=${limit}&skip=${skip}&select=title,price,brand,category`)
    .then((res) => {
      if (res.ok) {
        data.message = 'success';
      }
      return res.json();
    })
    .then(response => data.products = response);

  return data;
};

export { getProducts };
