import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vishwajeet Kumar | AI & Full-Stack Developer Portfolio',
  description: 'Final-year B.Tech CSE (AI Specialization) student passionate about Generative AI and Full-Stack Development. Building secure, scalable applications with LLMs and modern frameworks.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
