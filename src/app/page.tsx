import hero from '@/../public/hero.png';
import { PageWrapper } from '@/components/PageWrapper';
import { CTA } from '@/components/home/CTA';
import { FeaturesSection } from '@/components/home/Features';
import Image from 'next/image';

export default function HomePage() {
  return (
    <PageWrapper>
      <div className="grid place-items-center">
        <h1 className="text-7xl text-center mt-28 text-zinc-800 font-semibold w-2/3">
          Find the Best Courses for You{' '}
          <span className="text-gradient">Effortlessly</span>
        </h1>
        <p className="text-center w-3/5 text-lg mt-8 text-zinc-600">
          Experience the Future of Education. Simplify course selection with
          more insights than ever before and achieve academic excellence with
          ease.
        </p>
        <button className="text-2xl mt-16 font-semibold py-4 px-12 bg-sky-400 text-white rounded-lg shadow-sm">
          Find Your College
        </button>
        <Image
          src={hero}
          alt="Hero Image"
          className="border borer-zinc-400 rounded-xl shadow-md w-2/3 mt-20"
        />
        <div className="mt-40"></div>
        <FeaturesSection />
      </div>
      <div className="mt-40"></div>
      <CTA />
    </PageWrapper>
  );
}
