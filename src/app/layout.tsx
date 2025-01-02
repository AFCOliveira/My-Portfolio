import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

const poppings = Poppins({
  subsets: ["latin"], weight: ['300', '400', '500', '600']
});

export const metadata: Metadata = {
  title: "André Oliveira",
  description: "André Oliveira is a software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppings.className}>
        {children}
      </body>
    </html>
  );
}
