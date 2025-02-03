import { ThemeProvider } from "@mui/material";
import { Montserrat } from "next/font/google";
import React from "react";
import Footer from "./footer";
import "./globals.css";
import Header from "./header";
import theme from "./themeprovider";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="flex h-full items-center justify-center">
      <body
        className={`${montserrat.className} h-full w-full bg-white`}
      >
        <Header />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
