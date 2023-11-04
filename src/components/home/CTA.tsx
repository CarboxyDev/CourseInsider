import Link from 'next/link';
import { FullPageWidthContainer } from '../PageWrapper';

export const CTA = () => {
  return (
    <>
      <FullPageWidthContainer className="CTA-bg flex flex-col items-center justify-center py-20">
        <h3 className="text-zinc-50 hidden py-2 text-center text-3xl font-semibold md:block md:text-[46px]">
          Ready to pick the perfect courses?
        </h3>
        <div>
          <Link href="/">
            <button className="mt-12 rounded-lg text-zinc-700 bg-zinc-100 px-14 py-3 text-xl font-medium transition delay-200 duration-300 ease-in-out hover:scale-105 hover:cursor-pointer active:scale-95 md:mt-20">
              I&apos;m ready
            </button>
          </Link>
        </div>
      </FullPageWidthContainer>
    </>
  );
};
