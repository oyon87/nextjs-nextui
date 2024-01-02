"use client";

import HeaderLayout from "@/components/HeaderLayout/HeaderLayout";

function ProductDetailLayout({ children }) {
  return (
    <>
      <HeaderLayout title={"Product Detail"} />
      {children}
    </>
  );
}

export default ProductDetailLayout;
