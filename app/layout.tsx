import React from 'react';
import '@styles/globals.scss';
import { Inter } from '@next/font/google';
const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Sdev.gg</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Tell us how would will be the perfect website for your project and we will build and deploy it."
        />
        <link rel="canonical" href="https://sdev.gg/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sdev.gg" />
        <meta
          property="og:description"
          content="Tell us how would will be the perfect website for your project and we will build and deploy it."
        />
        <meta property="og:image" content="LINK TO THE IMAGE FILE" />
        <meta property="og:url" content="https://sdev.gg/" />
        <meta property="og:site_name" content="sdev" />
        <meta name="twitter:title" content="Sdev.gg" />
        <meta
          name="twitter:description"
          content="Tell us how would will be the perfect website for your project and we will build and deploy it."
        />
        <meta name="twitter:image" content="LINK TO IMAGE" />
        <meta name="robots" content="index, follow" />
        <script
          src="https://kit.fontawesome.com/05bb22a118.js"
          crossOrigin="anonymous"
          async
          defer
        ></script>
      </head>
      <body className="bg-gray-900 text-gray-100 overflow-y-auto">
        <div id="modal-root"></div>
        {children}
      </body>
    </html>
  );
}
