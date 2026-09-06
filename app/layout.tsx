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
  title: 'Vishwajeet Kumar | Software Engineer | Backend & Distributed Systems',
  description:
    'Software Engineer focused on backend and distributed systems, with experience across Java, Python, Spring Boot, FastAPI, PostgreSQL, Redis, AWS, Kubernetes, and applied AI.',
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
    title: 'Vishwajeet Kumar | Software Engineer | Backend & Distributed Systems',
    description:
      'Portfolio focused on backend systems, distributed architecture, cloud engineering, and practical AI systems.',
    type: 'website',
    url: 'https://vishwajeet.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishwajeet Kumar | Software Engineer',
    description: 'Backend and distributed systems engineer building reliable software and applied AI workflows.',
  },
  alternates: { canonical: 'https://vishwajeet.dev' },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vishwajeet Kumar',
  url: 'https://vishwajeet.dev',
  jobTitle: 'Software Engineer',
  sameAs: [
    'https://github.com/Vishwajeet-Kumar-Patel',
    'https://www.linkedin.com/in/vishwajeet-kumar-00b817239',
    'https://leetcode.com/u/vishwajeet_kumar_patel/',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${plusJakarta.variable} ${jetBrainsMono.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
