import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "G-Movies | Discover Movies and Series",
  description:
    "Explore the latest movies and TV series, view top-rated content, and enjoy a seamless browsing experience on G-Movies.",
  openGraph: {
    title: "G-Movies | Discover Movies and Series",
    description:
      "Discover the best movies and series. Explore popular titles, genres, and more on G-Movies.",
    url: "https://g-movies-app.netlify.app/",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1920,
        height: 1080,
        alt: "Hero image showcasing movies and series",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "G-Movies | Discover Movies and Series",
    description:
      "Discover the best movies and series. Explore popular titles, genres, and more on G-Movies.",
    images: ["/images/hero.jpg"],
  },
  alternates: {
    canonical: "https://g-movies-app.netlify.app/",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
