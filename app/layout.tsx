import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ANIXES | Neural Portfolio',
  description: 'Exploration of neural architectures, algorithmic datasets, and predictive modeling protocols. Portfolio of Animesh Dwivedi — Data Scientist & Machine Learning Engineer.',
  metadataBase: new URL('https://anixes.in'),
  openGraph: {
    title: 'ANIXES | Neural Portfolio',
    description: 'Data Scientist & ML Engineer — Building scalable, data-driven solutions.',
    url: 'https://anixes.in',
    siteName: 'ANIXES',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANIXES | Neural Portfolio',
    description: 'Data Scientist & ML Engineer — Building scalable, data-driven solutions.',
  },
  alternates: {
    canonical: 'https://anixes.in',
  },
  other: {
    'theme-color': '#000000',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
