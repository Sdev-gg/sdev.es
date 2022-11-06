import React from 'react';
import '@styles/globals.scss';
import { Inter } from '@next/font/google';
const inter = Inter();

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Sdev Dash</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Save time and get to market faster with this free fully responsive single page html template built with TailwindCSS."
        />
        <link rel="canonical" href="https://sdev.gg/dash" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sdev.gg Dashboard" />
        <meta
          property="og:description"
          content="Save time and get to market faster with this free fully responsive single page html template built with TailwindCSS."
        />
        <meta property="og:image" content="LINK TO THE IMAGE FILE" />
        <meta property="og:url" content="https://sdev.gg/dash" />
        <meta property="og:site_name" content="Course Landing Page" />
        <meta name="twitter:title" content="TITLE OF POST OR PAGE" />
        <meta
          name="twitter:description"
          content="Save time and get to market faster with this free fully responsive single page html template built with TailwindCSS."
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
