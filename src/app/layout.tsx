import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Pokédex",
    default: "Pokédex",
  },
  description:
    "Bem vindo à Pokédex, esta aplicação inclui os pokemos de todas as região.",
  authors: [{ name: "Shindi Toyama" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextTopLoader />
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="w-full bg-secondary">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
