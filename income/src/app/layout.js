"use client";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import { createContext, useState } from "react";
import { AuthProvider } from "../providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const Context = createContext();

export default function RootLayout({ children }) {
  const [isOpenRecord, setIsOpenRecord] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("GrAccessibility");
  const [IconColor, setIconColor] = useState("");
  return (
    <html lang="en">
      <head>
        <title>Geld Finance</title>
      </head>
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
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <AuthProvider>{children}</AuthProvider>
          <ToastContainer />
        </Context.Provider>
      </body>
    </html>
  );
}
