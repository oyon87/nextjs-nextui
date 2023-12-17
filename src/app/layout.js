import { Inter } from "next/font/google";
import "./globals.css";

// Providers
import NextProviders from "./NextProviders";
import LoginContextProvider from "@/contexts/login-context";

// Fontawesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"], preload: true });

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
            {children}
          </NextProviders>
        </LoginContextProvider>
      </body>
    </html>
  );
}
