import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { ChatBot } from '@/components/chatbot';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'AI Security - Intelligent Protection Built on AI',
  description: 'End-to-end security systems engineered with built-in AI for prevention, detection, and rapid response across MENA.',
  keywords: 'AI Security, CCTV, Access Control, Fire Alarm, Security Systems, MENA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ChatBot />
        <Toaster />
      </body>
    </html>
  );
}
