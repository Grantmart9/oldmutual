"use client";
import { ThemeProvider } from "@mui/material";
import { Montserrat } from "next/font/google";
import React, { useState } from "react";
import theme from "./themeprovider";
import "./globals.css";
import NavBar from "./components/Navbar"
import MenuButton from "./components/MenuButton";

const montserrat = Montserrat({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const [menuState, setMenuState] = useState(false);
  const handleClicks = () => { setMenuState(!menuState); console.log(menuState) }

  return (
    <html lang="en" className="flex h-full items-center justify-center">
      <body
        className={`${montserrat.className} h-full w-full bg-[url(/images/ad1.png)] bg-fixed`}
      >
        <div className="inline">
          <MenuButton menuState={menuState} handleClicks={handleClicks} />
          <NavBar menuState={menuState} />
        </div>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
