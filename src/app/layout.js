import { Inter } from "next/font/google";
import "./globals.css";

// Providers
import NextProviders from "./NextProviders";
import LoginContextProvider from "@/contexts/login-context";

// Fontawesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// Components
import NavbarMenu from "@/components/NavbarMenu/NavbarMenu";
import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Testing Yon",
  description: "Generated for testing next.js folder structure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoginContextProvider>
          <NextProviders>
            <div className="grid grid-cols-1 grid-rows-mobile-layout md:grid-rows-desktop-layout md:grid-cols-desktop-layout">
              <header className="md:order-2 dark text-foreground">
                <NavbarMenu />
              </header>
              <aside className="md:row-span-2 md:order-1 dark text-foreground md:min-h-screen">
                <SidebarMenu />
              </aside>
              <main className="m-4 md:order-3 light text-foreground">
                {children}
              </main>
            </div>
          </NextProviders>
        </LoginContextProvider>
      </body>
    </html>
  );
}
