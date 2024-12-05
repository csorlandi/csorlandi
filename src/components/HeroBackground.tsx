import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';

import { HeroOrbit } from './HeroOrbit';

export function HeroBackground() {
  return (
    <>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      />
      <div className="hero-ring size-[620px]" />
      <div className="hero-ring size-[820px]" />
      <div className="hero-ring size-[1020px]" />
      <div className="hero-ring size-[1220px]" />
      <HeroOrbit
        shouldOrbit
        shouldSpin
        orbitDuration={30}
        rotation={-14}
        size={430}
        spinDuration={3}
      >
        <SparkleIcon className="size-8 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit
        shouldOrbit
        shouldSpin
        orbitDuration={32}
        rotation={79}
        size={440}
        spinDuration={3}
      >
        <SparkleIcon className="size-5 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit shouldOrbit orbitDuration={34} rotation={-41} size={520}>
        <div className="size-2 rounded-full bg-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit
        shouldOrbit
        shouldSpin
        orbitDuration={36}
        rotation={178}
        size={530}
        spinDuration={3}
      >
        <SparkleIcon className="size-10 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit
        shouldOrbit
        shouldSpin
        orbitDuration={38}
        rotation={20}
        size={550}
        spinDuration={8}
      >
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit
        shouldOrbit
        shouldSpin
        orbitDuration={40}
        rotation={98}
        size={590}
        spinDuration={8}
      >
        <StarIcon className="size-8 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit shouldOrbit orbitDuration={42} rotation={-5} size={650}>
        <div className="size-2 rounded-full bg-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit
        shouldOrbit
        shouldSpin
        orbitDuration={44}
        rotation={144}
        size={710}
        spinDuration={3}
      >
        <SparkleIcon className="size-14 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit shouldOrbit orbitDuration={46} rotation={85} size={720}>
        <div className="size-3 rounded-full bg-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit
        shouldOrbit
        shouldSpin
        orbitDuration={48}
        rotation={-72}
        size={800}
        spinDuration={8}
      >
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
    </>
  );
}
