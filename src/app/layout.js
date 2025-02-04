import { Analytics } from "@vercel/analytics/react"
import { Cabin } from 'next/font/google';
import './globals.css';
import { ClerkProvider, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import Loading from '@/components/loading';
import AOSProvider from '@/components/AOSProvider';

const cabin = Cabin({ subsets: ['latin'] });

export const metadata = {
  title: 'Craftivert',
  description: 'Craftivert is a creative graphic design company, specializing in visually impactful designs that elevate your brand and engage your audience.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className={cabin.className}>
          <ClerkLoading>
            <Loading />
          </ClerkLoading>
          <ClerkLoaded>
            <AOSProvider>{children}</AOSProvider>
			<Analytics />

          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
