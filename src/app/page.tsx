import hero from '@/../public/hero.png';
import { PageWrapper } from '@/components/PageWrapper';
import { CTA } from '@/components/home/CTA';
import { FeaturesSection } from '@/components/home/Features';
import Image from 'next/image';

export default function HomePage() {
  return (
    <PageWrapper>
      <div className="grid place-items-center">
        <h1 className="text-7xl text-center mt-28 text-zinc-700 font-semibold w-2/3">
          Find the Best Courses for Yourself{' '}
          <span className="magic-text pb-2 overflow-visible">Effortlessly</span>
        </h1>
        <p className="text-center w-3/5 text-lg  font-light mt-8 text-zinc-600">
          Explore your college courses in a whole new and convenient way. Find
          the best courses for yourself comfortably without juggling between
          different resources to figure them out.
        </p>
        <button className="mt-12 rounded-md bg-primary-500 px-8 py-3 text-lg font-medium text-white shadow-sm transition delay-200 duration-300 ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-purple-500/90 active:scale-95 md:mt-12">
          Check out courses
        </button>
        <Image
          src={hero}
          alt="Hero Image"
          className="border borer-zinc-400 rounded-xl shadow-md w-2/3 mt-20 shadow-sky-300"
        />
        <div className="mt-40"></div>
        <FeaturesSection />
      </div>
      <div className="mt-40"></div>
      <CTA />
    </PageWrapper>
  );
}
