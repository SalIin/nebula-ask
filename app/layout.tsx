import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";

import { StoreProvider } from "@/store/providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nebula Ask",
  description: "OBRIO test application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Header />
          <main className="flex flex-col items-center py-10 px-8 md:p-24">
            {children}
          </main>
        </StoreProvider>
      </body>
    </html>
  );
}
