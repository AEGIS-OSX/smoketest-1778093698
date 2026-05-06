import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PawWalk — Dog Walking Service",
  description: "Flexible, on-demand dog walking for urban dog owners. Join the PawWalk waitlist for early access.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
  authors: [
    {
      name: "PawWalk",
    },
  ],
  keywords: "dog walking, pet care, urban dog owners, flexible scheduling, dog walker service",
  openGraph: {
    title: "PawWalk — Dog Walking Service",
    description: "Flexible, on-demand dog walking for urban dog owners. Join the PawWalk waitlist for early access.",
    type: "website",
    url: "https://pawwalk.com",
    siteName: "PawWalk",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PawWalk — Dog Walking Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PawWalk — Dog Walking Service",
    description: "Flexible, on-demand dog walking for urban dog owners. Join the PawWalk waitlist for early access.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0B0C10" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://pawwalk.com" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-canvas text-text-primary">
        {children}
      </body>
    </html>
  );
}
