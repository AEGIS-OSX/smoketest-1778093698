import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PawWalk — Dog Walking Service",
  description: "Flexible, on-demand dog walking for urban pet owners. Join the waitlist for early access.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
  openGraph: {
    title: "PawWalk — Dog Walking Service",
    description: "Flexible, on-demand dog walking for urban pet owners. Join the waitlist for early access.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0B0C10" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {`
            @font-face {
              font-family: 'Söhne';
              src: url('/fonts/soehne-regular.woff2') format('woff2');
              font-weight: 400;
              font-display: swap;
            }
            @font-face {
              font-family: 'Söhne';
              src: url('/fonts/soehne-medium.woff2') format('woff2');
              font-weight: 500;
              font-display: swap;
            }
            @font-face {
              font-family: 'Söhne';
              src: url('/fonts/soehne-semibold.woff2') format('woff2');
              font-weight: 600;
              font-display: swap;
            }
            @font-face {
              font-family: 'Domaine Display';
              src: url('/fonts/domaine-display-regular.woff2') format('woff2');
              font-weight: 400;
              font-display: swap;
            }
            @font-face {
              font-family: 'Domaine Display';
              src: url('/fonts/domaine-display-bold.woff2') format('woff2');
              font-weight: 700;
              font-display: swap;
            }
          `}
        </style>
      </head>
      <body className="bg-canvas text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
