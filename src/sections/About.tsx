'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';

import { Card } from '@/components/Card';
import { SectionHeader } from '@/components/SectionHeader';
import bookImage from '@/assets/images/book-cover.png';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HtmlIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import MapImage from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/memoji-smile.png';
import { CardHeader } from '@/components/CardHeader';
import { ToolboxItems } from '@/components/ToolboxItems';

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HtmlIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: 'Skating',
    emoji: '🛼',
    top: '5%',
    left: '5%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    top: '10%',
    left: '75%',
  },
  {
    title: 'Music',
    emoji: '🎶',
    top: '15%',
    left: '40%',
  },
  {
    title: 'Fitness',
    emoji: '🏋️',
    top: '65%',
    left: '5%',
  },
  {
    title: 'Reading',
    emoji: '📖',
    top: '70%',
    left: '60%',
  },
];

export const AboutSection = () => {
  const dragContainerRef = useRef(null);

  return (
    <section className="container py-16 lg:py-24" id="about">
      <SectionHeader
        description="Learn more about who I am, what I do, and what inspires me."
        eyebrow="About me"
        title="A Glimpse Into My World"
      />
      <div className="mt-20 flex flex-col gap-6 md:gap-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader
              description="Explore the books shaping my perspectives."
              title="My Reads"
            />
            <div className="mx-auto mt-2 w-40 md:mt-0">
              <Image alt="Book Cover" src={bookImage} />
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader
              className=""
              description="Explore the technologies and tools I use to craft exceptional digital experiences."
              title="My Toolbox"
            />
            <ToolboxItems
              items={toolboxItems}
              itemsWrapperClassName="animate-markee [animation-duration:30s]"
            />
            <ToolboxItems
              className="mt-6"
              items={toolboxItems}
              itemsWrapperClassName="-translate-x-1/2 animate-reverse-markee [animation-duration:15s]"
            />
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
          <Card className="flex h-[320px] flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              className=""
              description="Explore my interests and hobbies beyond the digital realm."
              title="Beyond the Code"
            />
            <div ref={dragContainerRef} className="relative flex-1">
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  drag
                  className="absolute inline-flex gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5"
                  dragConstraints={dragContainerRef}
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="relative h-[320px] p-0 md:col-span-2 lg:col-span-1">
            <a
              href="https://maps.app.goo.gl/B4xXT5eqRrbDLKHt5"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                alt="map"
                className="h-full w-full object-cover"
                src={MapImage}
              />
              <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:content-['']">
                <div className="absolute inset-0 -z-20 animate-ping rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 [animation-duration:2s]" />
                <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400" />
                <Image
                  alt="smile memoji"
                  className="size-20"
                  src={smileMemoji}
                />
              </div>
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};
