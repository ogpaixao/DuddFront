import type { Metadata } from "next";
import { delaFont, konkhmerFont } from "./font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dudd",
  description: "Dudd, apenas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${delaFont.className} ${konkhmerFont.className} antialiased`}

      >
        {children}
      </body>
    </html>
  );
}
