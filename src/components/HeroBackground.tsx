import grainImage from '@/assets/images/grain.jpg';
import { HeroOrbit } from './HeroOrbit';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';

export function HeroBackground() {
  return (
    <>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`
        }}
      />
      <div className="size-[620px] hero-ring" />
      <div className="size-[820px] hero-ring" />
      <div className="size-[1020px] hero-ring" />
      <div className="size-[1220px] hero-ring" />
      <HeroOrbit size={800} rotation={-72}>
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20}>
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98}>
        <StarIcon className="size-8 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={430} rotation={-14}>
        <SparkleIcon className="size-8 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79}>
        <SparkleIcon className="size-5 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178}>
        <SparkleIcon className="size-10 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144}>
        <SparkleIcon className="size-14 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={720} rotation={85}>
        <div className="size-3 bg-emerald-300/20 rounded-full" />
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-41}>
        <div className="size-2 bg-emerald-300/20 rounded-full" />
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-5}>
        <div className="size-2 bg-emerald-300/20 rounded-full" />
      </HeroOrbit>
    </>
  )
}