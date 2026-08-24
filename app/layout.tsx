import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
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
  title: "home · Ryan Gregory",
  description: "Personal website of Ryan Gregory",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Analytics />

      <body className="min-h-full flex flex-col bg-background text-foreground container mx-auto px-8 lg:px-16">
        {children}

        <hr />

        <div className="flex gap-2 justify-between my-2 text-sm">
          <p>Ryan Gregory</p>
          <p>Last updated: August 2026</p>
        </div>
      </body>
    </html>
  );
}
