import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome to Next.js 16",
  description: "This is a demo project for Next.js 16 features",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen w-screen`}
      >
        <header>
          <nav className="p-5 border-b border-gray-300 mb-5 flex gap-5 justify-end">
            <Link href="/" className="">
              Home
            </Link>
            <Link href="/about" className="">
              About
            </Link>
            <Link href="/users" className="">
              Dashboard Users
            </Link>
            <Link href="/analytics" className="">
              Dashboard Analytics
            </Link>
          </nav>
        </header>

        <main className="p-5 grow">
          {children}
        </main>

        <footer className="p-5 border-t border-gray-300 text-center">
          <p>This is a demo project for Next.js 16 features</p>
        </footer>
      </body>
    </html>
  );
}
