/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../lib/providers";

export const metadata: Metadata = {
  title: "Plate Pal",
  description: "Next Level Recipe Sharing Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
      <Providers>
          <div className="">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
