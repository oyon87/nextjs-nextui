import { Inter } from "next/font/google";
import "./globals.css";
import NextProviders from "./NextProviders";
import NavbarMenu from "@/components/NavbarMenu/NavbarMenu";
import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";

const inter = Inter( { subsets: [ "latin" ] } );

export const metadata = {
  title: "Testing Yon",
  description: "Generated for testing next.js folder structure",
};

export default function RootLayout ( { children } ) {
  return (
    <html lang="en">
      <body className={ inter.className }>
        <NextProviders>
          {/* <div className="dark text-foreground">
            <NavbarMenu />
          </div>
          <main>
            <div className="grid grid-cols-main dark text-foreground">
              <SidebarMenu />
              <div className="m-4 light text-foreground">{children}</div>
            </div>
          </main> */}
          <div className="grid grid-rows-mobile-layout md:grid-rows-desktop-layout md:grid-cols-desktop-layout">
            <header className="md:order-2 dark text-foreground">
              <NavbarMenu />
            </header>
            <aside className="md:row-span-2 md:order-1 dark text-foreground">
              <SidebarMenu />
            </aside>
            <main className="m-4 md:order-3 light text-foreground">
              <h1>MAIN</h1>
            </main>
          </div>
        </NextProviders>
      </body>
    </html>
  );
}
