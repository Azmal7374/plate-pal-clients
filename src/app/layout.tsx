/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../lib/providers";

export const metadata: Metadata = {
  title: "Apollo Gears",
  description: "Next Level Riding Sharing Service",
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
          <div className="mx-auto container">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
