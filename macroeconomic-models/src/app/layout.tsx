import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Model Stack - Theoretical Macroeconomic Models",
  description: "A comprehensive resource for theoretical macroeconomic models with detailed mathematical explanations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Monaspace+Neon:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-gray-100 min-h-screen font-mono`}
        style={{ fontFamily: "'Monaspace Neon', 'Courier New', monospace" }}
      >
        <Navigation />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
