import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PopX Onboarding",
  description: "Pixel-perfect mobile UI flow",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white grid place-items-center py-8">
        {children}
      </body>
    </html>
  );
}
