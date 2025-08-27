import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HelloJaiSoif — Packs boissons prêts à partager",
    template: "%s | HelloJaiSoif",
  },
  description: "Des packs boissons prêts à partager, livrés rapidement. Paiements sécurisés Stripe et PayPal.",
  metadataBase: new URL("https://www.hellojaisoif.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "HelloJaiSoif",
    description: "Des packs boissons prêts à partager, livrés rapidement.",
    url: "https://www.hellojaisoif.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
