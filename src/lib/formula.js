const discountCalculation = (price, discount) => {
  return Math.ceil(price - (price * discount) / 100);
};

export { discountCalculation };
