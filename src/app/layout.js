import "./globals.css";

// Providers
import NextProviders from "./NextProviders";
import LoginContextProvider from "@/contexts/login-context";

// Fontawesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata = {
  title: "Testing Yon",
  description: "Generated for testing next.js folder structure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LoginContextProvider>
          <NextProviders>{children}</NextProviders>
        </LoginContextProvider>
      </body>
    </html>
  );
}
