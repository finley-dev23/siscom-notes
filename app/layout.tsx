import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SISCOM - Cloud & AI Infrastructure Investment",
  description: "Building Africa's intelligent Cloud, Data, and AI infrastructure to empower Kenya's SMEs to innovate, scale, and thrive in a digital-first global economy.",
  icons: {
    icon: '/assets/images/siscom-image.png',
    apple: '/assets/images/siscom-image.png',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Funnel+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

