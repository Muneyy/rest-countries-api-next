import type { Metadata } from 'next';
import './globals.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from '@/components/Header';
import ThemeSetter from '@/components/ThemeSetter';
import { Suspense } from 'react';
import Loading from './loading';
config.autoAddCss = true;

import { Nunito_Sans } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Rest Countries API',
  description: 'Next project using the Rest Countries API',
};

const nunito = Nunito_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ThemeSetter>
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ThemeSetter>
      </body>
    </html>
  );
}
