import type { Metadata } from "next";

import "@/shared/styles/globals.css";
import "@/shared/styles/normalize.css";

export const metadata: Metadata = {
  title: "Ecorganicos | Nosotros",
  description: "Ecorganicos de Colombia SAS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="custom-scrollbar">{children}</body>
    </html>
  );
}
