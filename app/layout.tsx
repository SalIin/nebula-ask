import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";

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
        <Header />
        <main className="flex min-h-[calc(100dvh_-_6rem)] flex-col items-center justify-center py-10 px-8 md:p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
