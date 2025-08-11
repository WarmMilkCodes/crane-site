import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Footer } from "@/./components/Footer";
import { Navbar } from "@/./components/Navbar";

export const metadata: Metadata = {
  title: "City of Crane — Demo",
  description: "Modern, mobile-first demo of the City of Crane website.",
  metadataBase: new URL("https://demo.example.com"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">Skip to Main Content</a>
        <Navbar />
        <main id="main" className="mx-auto max-w-6xl px-4 md:px-6 py-6 md:py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
