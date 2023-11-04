import { Badge } from '@/components/Badge';
import { Logo } from '@/components/Logo';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="mt-100 h-px bg-zinc-100"></div>
        <div className="mx-auto my-10 flex w-fit flex-col items-center">
          <p className="text-dark-200">
            <Link href="/">
              <Logo className="mr-2 inline" hoverAnimation={true} />
            </Link>
            <span className="text-medium mr-2">CourseInsider</span>
            <Badge text={'ALPHA'} size={'md'} color={'primary'} />
          </p>
          <p className="mt-6 font-light text-zinc-500">
            © 2023 Arman & Aditya. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
