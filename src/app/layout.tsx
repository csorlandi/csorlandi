import type { Metadata } from 'next';

import { Inter, Calistoga } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Created with the help of the universe!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          'text-balance bg-gray-900 font-sans text-white antialiased',
        )}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
