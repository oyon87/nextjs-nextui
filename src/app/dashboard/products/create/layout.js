"use client";

import HeaderLayout from "@/components/HeaderLayout/HeaderLayout";

function ProductCreateLayout({ children }) {
  return (
    <>
      <HeaderLayout title={"Product Create"} />
      {children}
    </>
  );
}

export default ProductCreateLayout;
