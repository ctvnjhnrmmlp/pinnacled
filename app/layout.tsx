import FONTS from '@/configurations/fonts';
import METADATA from '@/configurations/metadata';
import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang='en'>
      <body className={`${FONTS.alpha.className} antialiased no-scrollbar`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
