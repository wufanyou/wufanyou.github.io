import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Fanyou Wu | 吴凡优",
  description: "Personal website of Fanyou Wu",
  icons: {
    icon: "/assets/img/favicon.ico",
  },
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
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/academicons/1.9.0/css/academicons.min.css"
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} pt-20`}>
        <Navbar />
        <div className="container-main mt-5">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
