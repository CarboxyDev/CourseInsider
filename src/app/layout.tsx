import Providers from '@/components/Providers';
import { cn } from '@/lib/util';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'next-carboxy-starter',
  description: 'Created using carboxydev/next-carboxy-starter',
  category: '',
  keywords: [],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          process.env.DEV == 'true' && 'debug-screens',
          'bg-zinc-100 text-zinc-900'
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
