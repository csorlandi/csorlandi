import memojiImage from '@/assets/images/memoji-computer.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import Image from 'next/image';
import { HeroBackground } from '@/components/HeroBackground';


export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute -z-30 inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <HeroBackground />
      </div>
      <div className="container flex flex-col items-center md:max-w-xl">
        <Image src={memojiImage} className="size-24" alt="Person peeking from behind laptop" />
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <span className="bg-green-500 size-2.5 rounded-full" />
          <p className="text-sm font-medium">Available for new projects</p>
        </div>
        <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Building Exceptional User Experiences</h1>
        <p className="mt-4 text-center text-white/60 md:text-lg">I specialize in transforming designs into functional, high-performing web applications. Let&apos;s discuss your next project.</p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button type="button" className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button type="button" className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
