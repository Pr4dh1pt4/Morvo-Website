import type { Metadata } from 'next';
import './globals.css';

const title = 'Morvo — Filamen 3D Printing dari Botol Plastik Bekas';
const description =
  'Morvo mengolah limbah botol plastik menjadi filamen 3D printing ramah lingkungan tanpa mengorbankan kualitas cetak.';

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'id_ID',
    siteName: 'Morvo',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&family=Space+Grotesk:wght@700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
