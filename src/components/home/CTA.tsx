import Link from 'next/link';
import { FullPageWidthContainer } from '../PageWrapper';

export const CTA = () => {
  return (
    <>
      <FullPageWidthContainer className="CTA-gradient flex flex-col items-center justify-center py-20">
        <h3 className="magic-text hidden py-2 text-center text-3xl font-semibold md:block md:text-[46px]">
          Ready to become more productive?
        </h3>
        <div>
          <Link href="/">
            <button className="mt-12 rounded-lg text-zinc-700 bg-zinc-100 px-8 py-3 text-lg font-medium transition delay-200 duration-300 ease-in-out hover:scale-105 hover:cursor-pointer active:scale-95 md:mt-20">
              I&apos;m ready
            </button>
          </Link>
        </div>
      </FullPageWidthContainer>
    </>
  );
};
