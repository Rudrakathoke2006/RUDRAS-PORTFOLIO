import React from 'react';
import '../style.css';

export const metadata = {
  title: "Rudra Kathoke — Java Backend Architect | AI Engineer | Web3 Developer",
  description: "Production portfolio of Rudra Kathoke — B.Tech CSE Ramdeobaba University (CGPA 9.2) maintaining high-throughput Java backends, OpenCV/YOLO wildlife AI, and gasless Web3 smart contracts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&family=Geist+Mono:wght@300..800&family=Geist:wght@300..900&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
