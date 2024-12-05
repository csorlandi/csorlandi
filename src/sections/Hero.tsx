import Image from 'next/image';
import Link from 'next/link';

import memojiImage from '@/assets/images/memoji-computer.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import { HeroBackground } from '@/components/HeroBackground';

export const HeroSection = () => {
  return (
    <section
      className="relative z-0 overflow-x-clip py-32 md:py-48 lg:py-60"
      id="hero"
    >
      <div className="absolute inset-0 -z-30 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <HeroBackground />
      </div>
      <div className="container flex flex-col items-center md:max-w-xl">
        <Image
          alt="Person peeking from behind laptop"
          className="size-24"
          src={memojiImage}
        />
        <div className="inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
          <span className="relative size-2.5 rounded-full bg-green-500">
            <span className="absolute inset-0 animate-ping-large rounded-full bg-green-500" />
          </span>
          <p className="text-sm font-medium">Available for new projects</p>
        </div>
        <h1 className="mt-8 text-center font-serif text-3xl tracking-wide md:text-5xl">
          Building Exceptional User Experiences
        </h1>
        <p className="mt-4 text-center text-white/60 md:text-lg">
          I specialize in transforming designs into functional, high-performing
          web applications. Let&apos;s discuss your next project.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Link
            className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6"
            href="#projects"
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </Link>
          <Link
            className="inline-flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-6 text-gray-900"
            href="#contact"
          >
            <span>👋</span>
            <span className="font-semibold">Let&apos;s connect</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
