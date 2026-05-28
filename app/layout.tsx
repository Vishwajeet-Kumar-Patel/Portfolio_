import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vishwajeet.dev'),
  title: 'Vishwajeet Kumar | Backend Engineer | Distributed Systems | Applied AI Systems',
  description:
    'Backend and Applied AI engineer building scalable APIs, distributed architectures, and production-ready AI workflows.',
  keywords: [
    'Backend Engineer',
    'Distributed Systems',
    'Applied AI Engineer',
    'Node.js',
    'FastAPI',
    'LangChain',
    'System Design',
  ],
  openGraph: {
    title: 'Vishwajeet Kumar | Backend & Applied AI Engineer',
    description:
      'Portfolio focused on backend systems, distributed architecture, and practical AI engineering.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${plusJakarta.variable} ${jetBrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
