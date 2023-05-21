import 'css/global.css';
import { Roboto_Condensed } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const roboto = Roboto_Condensed({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  style: ['normal'],
});

export const metadata = {
  title: 'Cafe Maddy Cab',
  description:
    'Cab rides for Asian women, Asian LGBTQ, Asian elderly in NYC in need.',
  opengraph: {
    images: '/landing-page-1.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
