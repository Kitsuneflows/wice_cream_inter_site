import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google"
import "./globals.css";
import { twMerge } from "tailwind-merge";




const inter = Inter({ subsets: ['latin'], variable:"--font-sans" });
const calistoga = Calistoga({ subsets: ['latin'], variable:'--font-sherif', weight:['400']});

export const metadata: Metadata = {
  title: "wice cream",
  keywords: ["wice cream", "wice", "ice cream", "wicecream", "wice-cream", "wicecream.fr", "wice-cream.fr"],
  description: "wice cream est un jeu de loterie pour gagner des lots givrés !",
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
