import { Metadata, Viewport } from "next";
import "../styles/globals.css";
// eslint-disable-next-line import/order
import { Providers } from "../lib/providers";

export const metadata: Metadata = {
  title: "Plate Pal",
  description: "Recipe sharing platform",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link
          href="https://cdn-icons-png.flaticon.com/128/1790/1790457.png"
          rel="icon"
        />
      </head>
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}