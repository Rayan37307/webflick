import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Webflick - Modern Web Design & Development",
  description:
    "From custom full-stack solutions to WordPress, and what Webflow & Shopify—Webflick builds websites that convert. Modern, scalable & creative web design for your business.",
  keywords: [
    "web design",
    "web development",
    "custom websites",
    "WordPress",
    "Webflow",
    "Shopify",
    "responsive design",
  ],
  authors: [{ name: "Webflick Team" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#7B39FC",
  openGraph: {
    title: "Webflick - Modern Web Design & Development",
    description:
      "From custom full-stack solutions to WordPress, Webflow & Shopify—Webflick builds websites that convert.",
    type: "website",
    locale: "en_US",
    siteName: "Webflick",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webflick - Modern Web Design & Development",
    description:
      "From custom full-stack solutions to WordPress, Webflow & Shopify—Webflick builds websites that. convert.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
