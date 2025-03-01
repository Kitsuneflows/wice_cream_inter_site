import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google"
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { FooterWithSitemap } from '@/components/footer'
import { Header } from "@/sections/Header";


const inter = Inter({ subsets: ['latin'], variable:"--font-sans" });
const calistoga = Calistoga({ subsets: ['latin'], variable:'--font-sherif', weight:['400']});

export const metadata: Metadata = {
  title: "CDLP Monfort",
  description: "Café de la pose Monfort-l'Amaury",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="fr">
      <body className={twMerge(inter.variable, calistoga.variable, "text-white antialiased font-sans ")}>
        <main>{children}</main>
        </body>
    </html>
  </>);
}
