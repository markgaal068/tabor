import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar'
import TransitionProvider from './components/TransitionProvider'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Szabó Andrea",
  description: "Nyári tábor kicsiknek és nagyoknak!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
