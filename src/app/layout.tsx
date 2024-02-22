import type { Metadata } from 'next';
import './globals.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from '@/components/Header';
import ThemeSetter from '@/components/ThemeSetter';
config.autoAddCss = true;

export const metadata: Metadata = {
  title: 'Rest Countries API',
  description: 'Next project using the Rest Countries API',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeSetter>
          <Header />
          {children}
        </ThemeSetter>
      </body>
    </html>
  );
}
