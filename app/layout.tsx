import type { Metadata, Viewport } from "next";
import { Inter, Rajdhani } from "next/font/google";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CareSync — Complete Clinic Management for Eye Clinics",
  description:
    "CareSync is a desktop clinic management system for eye clinics — patient records, examinations, prescriptions, spectacles, surgeries, billing and finances. Local, encrypted, private.",
  openGraph: {
    title: "CareSync — Your Eye Clinic. In Sync.",
    description:
      "Complete clinic management for modern eye clinics. Local, encrypted and built for ophthalmology workflows.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${rajdhani.variable}`}>
      <body className="font-body">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-lime focus:px-4 focus:py-2 focus:text-ink focus:shadow-lg"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
