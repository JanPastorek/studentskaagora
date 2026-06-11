import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Študentská Agora",
  description:
    "Študentská Agora — priestor pre myslenie, diskusiu a rast. Tutoriály z filozofie, vedy a spoločnosti pre študentov a mladých pracujúcich do 26 rokov.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
