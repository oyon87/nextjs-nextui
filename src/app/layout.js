import "./globals.css";

// Providers
import NextProviders from "./NextProviders";
import LoginContextProvider from "@/contexts/login-context";

// Fontawesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { Inter, Montserrat, Poppins } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
// });

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   display: "swap",
// });

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Testing Yon",
  description: "Generated for testing next.js folder structure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <LoginContextProvider>
          <NextProviders>{children}</NextProviders>
        </LoginContextProvider>
      </body>
    </html>
  );
}
