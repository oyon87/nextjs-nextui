"use client";

import HeaderLayout from "@/components/HeaderLayout/HeaderLayout";

function ProductEditLayout({ children }) {
  return (
    <>
      <HeaderLayout title={"Product Edit"} />
      {children}
    </>
  );
}

export default ProductEditLayout;
