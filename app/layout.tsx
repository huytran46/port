import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AccentProvider, AccentSwitcher } from "@/src/ui/accent-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Huy Tran — Software Engineer (Front End)",
  description: "Huy's minimal portfolio",
  // metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Huy Tran — Software Engineer (Front End)",
    description:
      "Frontend Engineer focused on performant React & Next.js apps.",
    url: "/",
    siteName: "Huy Tran",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-accent="purple">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AccentProvider>
          {children}
          <AccentSwitcher />
        </AccentProvider>
      </body>
    </html>
  );
}
