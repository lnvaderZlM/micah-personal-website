import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Micah Alconcel | Web Developer",
  description: "Micah Alconcel's portfolio and resume",
};

const Header = () => {
  return (
    <header className="justify-start text-center flex-col flex items-center relative px-4 md:px-24 lg:px-42 py-8 md:py-12 mx-auto bg-border-bg-hover-light dark:bg-border-bg-hover-dark w-full mb-8">
      <nav className="flex items-center gap-8">
        <ul className="flex items-center justify-between text-xl gap-8 font-bold">
          <Link href="/" className="hover:text-border-hover-light dark:hover:text-border-hover-dark">
            Home
          </Link>
          <Link href="/about" className="hover:text-border-hover-light dark:hover:text-border-hover-dark">
            About Me
          </Link>
          <Link href="/MicahAlconcel.pdf" target="_blank" className="hover:text-border-hover-light dark:hover:text-border-hover-dark">
            My Resume
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col pb-4`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
