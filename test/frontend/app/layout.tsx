import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "FINORA - Simple Task Manager",
  description: "A simple single-page Task Management application built with Next.js and Express",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
