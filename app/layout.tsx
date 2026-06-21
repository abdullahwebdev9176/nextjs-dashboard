import './globals.css';

import { Black_Ops_One, Inter, Lusitana , Merriweather  } from 'next/font/google';

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

const merriweather   = Merriweather ({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-merriweather',
});

const lusitana   = Lusitana ({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-lusitana',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${blackOps.variable} ${inter.variable} ${merriweather.variable} ${lusitana.variable}`}>
      <body>{children}</body>
    </html>
  );
}
