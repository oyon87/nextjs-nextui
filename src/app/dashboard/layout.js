"use client";

import { hasCookie } from "cookies-next";
import { useEffect, useCallback } from "react";
import { getAuthCookies } from "@/utility/cookies-next";
import { useLoginContext } from "@/contexts/login-context";

// Components
import NavbarMenu from "@/components/NavbarMenu/NavbarMenu";
import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";

function DashboardLayout({ children }) {
  const { setLogin } = useLoginContext();

  const setLoginContext = useCallback(() => {
    if (hasCookie("auth")) {
      const dataAuth = getAuthCookies();
      setLogin(dataAuth);
    }
  });

  useEffect(() => {
    setLoginContext();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-mobile-layout md:grid-rows-desktop-layout md:grid-cols-desktop-layout">
        <header className="md:order-2 dark text-foreground">
          <NavbarMenu />
        </header>
        <aside className="md:row-span-2 md:order-1 dark text-foreground md:min-h-screen">
          <SidebarMenu />
        </aside>
        <main className="m-4 md:order-3 light text-foreground">{children}</main>
      </div>
    </>
  );
}

export default DashboardLayout;
