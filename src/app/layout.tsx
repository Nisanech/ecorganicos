import type { Metadata } from "next";
import React from "react";

import "@/shared/styles/globals.css";
import "@/shared/styles/normalize.css";

import Header from "@/presentation/components/Header";
import Footer from "@/presentation/components/Footer";

export const metadata: Metadata = {
  title: "Ecorganicos | Nosotros",
  description: "Ecorganicos de Colombia SAS",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`custom-scrollbar`}>
        <Header></Header>

        <main>{children}</main>

        <Footer></Footer>
      </body>
    </html>
  );
}
