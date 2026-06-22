import './globals.css';

import { Black_Ops_One, Inter  } from 'next/font/google';

const blackOps   = Black_Ops_One ({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-black-ops-one',
});

const inter   = Inter ({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${blackOps.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
