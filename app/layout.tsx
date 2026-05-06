import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PawWalk — Dog Walking Service",
  description: "Flexible, on-demand dog walking for urban dog owners. Join the PawWalk waitlist for early access.",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "PawWalk — Dog Walking Service",
    description: "Flexible, on-demand dog walking for urban dog owners. Join the PawWalk waitlist for early access.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0B0C10" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          `}
        </style>
      </head>
      <body className="bg-canvas text-text-primary">
        {children}
      </body>
    </html>
  );
}
