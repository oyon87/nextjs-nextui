import { Inter } from "next/font/google";
import "./globals.css";
import NextProviders from "./NextProviders";
import NavbarMenu from "@/components/NavbarMenu/NavbarMenu";
import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextProviders>
          <div className="dark text-foreground">
            <NavbarMenu />
          </div>
          <main>
            <div className="grid grid-cols-main dark text-foreground">
              <SidebarMenu />
              <div className="m-4 light text-foreground">{children}</div>
            </div>
          </main>
        </NextProviders>
      </body>
    </html>
  );
}
