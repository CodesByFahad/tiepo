import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth", "slnt", "opsz"],
});

export const metadata = {
  title: "Tiepo Keyboards",
  description: "Premium mechanical keyboards crafted with precision.",
  openGraph: {
    title: "Tiepo Keyboards",
    description: "Premium mechanical keyboards crafted with precision.",
    url: "https://tiepo.vercel.app",
    type: "website",
    images: [
      {
        url: "/og-cover.png", // <— your image
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-cover.png"], // <— your image again
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFlex.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
