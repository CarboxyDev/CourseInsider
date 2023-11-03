import Providers from '@/components/Providers';
import { cn } from '@/lib/util';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CourseInsider',
  description:
    'An easy to use portal for browsing and understanding your college courses well',
  category: 'education',
  keywords: ['course', 'college', 'education', 'degree'],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          process.env.NODE_ENV === 'development' && 'debug-screens',
          'bg-zinc-100 text-zinc-900'
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
