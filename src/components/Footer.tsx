import { Badge } from '@/components/Badge';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="mt-100 h-px bg-zinc-100"></div>
        <div className="mx-auto my-10 flex w-fit flex-col items-center">
          <p className="text-dark-200">
            <Link href="/"></Link>
            <span className="mr-2 font-medium text-zinc-700">
              CourseInsider
            </span>
            <Badge text={'BETA'} size={'md'} color={'primary'} />
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
