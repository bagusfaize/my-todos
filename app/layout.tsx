import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Navbar from "./components/Navbar";
import ReactQueryProvider from "./providers/ReactQueryProvider";


export const metadata: Metadata = {
  title: "Simple To-Do App",
  description: "Simple todo app",
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ReactQueryProvider>
          <>
            <Navbar />
            {children}
          </>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
