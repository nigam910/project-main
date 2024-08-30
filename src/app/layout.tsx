import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
export const metadata: Metadata = {
  title: "ReviewSync Forum",
  description: "Forum for ReviewSync App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "")}>
        <Header />
        {children}</body>
    </html>
  );
}