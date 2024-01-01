"use client";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function NextProviders({ children }) {
  const router = useRouter();

  // 2. Wrap NextUIProvider at the root of your app
  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}
