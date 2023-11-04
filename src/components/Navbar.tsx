'use client';

import { Badge } from '@/components/Badge';
import Link from 'next/link';

export type NavbarVariants = 'with-branding' | 'with-minimal-branding';

interface NavbarProps {
  variant?: NavbarVariants;
  drawDivider?: boolean;
}

const Navbar = (props: NavbarProps) => {
  const { variant, drawDivider } = props;

  return (
    <>
      <div className="mt-4 flex w-full select-none flex-row items-center">
        {variant === 'with-branding' && (
          <Link href="/">
            <span className="mr-3 inline text-lg font-semibold text-zinc-700">
              CourseInsider
            </span>
            <Badge text="BETA" size="md" color="primary"></Badge>
          </Link>
        )}
        {variant === 'with-minimal-branding' && (
          <Link href="/">
            <span className="mr-2 text-lg font-semibold text-zinc-700">
              CourseInsider
            </span>
          </Link>
        )}
        <div className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-zinc-500 hover:cursor-pointer"></div>
      </div>
      {drawDivider && <div className="mt-4 h-px bg-zinc-100 md:mt-6"></div>}
    </>
  );
};

export default Navbar;
