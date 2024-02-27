"use client";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { createContext, useState } from "react";
import { AuthProvider } from "../providers/AuthProvider";
import Navbar from "../components/dashboardNavbar/page";

const inter = Inter({ subsets: ["latin"] });

export const Context = createContext();

export default function RootLayout({ children }) {
  const [isOpenRecord, setIsOpenRecord] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("GrAccessibility");
  const [IconColor, setIconColor] = useState("");
  return (
    <html lang="en">
      <body className={inter.className}>
        <Context.Provider
          value={{
            isOpenCategory,
            setIsOpenCategory,
            isOpenRecord,
            setIsOpenRecord,
            selectedIcon,
            IconColor,
            setIconColor,
            setSelectedIcon,
          }}
        >
          <AuthProvider>{children}</AuthProvider>
        </Context.Provider>
      </body>
    </html>
  );
}
