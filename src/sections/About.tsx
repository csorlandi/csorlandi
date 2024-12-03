import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from '@/assets/images/book-cover.png';
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HtmlIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import MapImage from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/memoji-smile.png';
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

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
    title: 'Painting',
    emoji: '🎨',
    top: '5%',
    left: '5%',
  },
  {
    title: 'Photography',
    emoji: '📸',
    top: '5%',
    left: '50%',
  },
  {
    title: 'Hiking',
    emoji: '🥾',
    top: '40%',
    left: '35%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    top: '35%',
    left: '10%',
  },
  {
    title: 'Music',
    emoji: '🎶',
    top: '45%',
    left: '70%',
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
    left: '45%',
  },
]

export const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 container">
      <SectionHeader title="A Glimpse Into My World" eyebrow="About me" description="Learn more about who I am, what I do, and what inspires me." />
      <div className="mt-20 flex flex-col gap-6 md:gap-8">
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={bookImage} alt="Book Cover" />
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft exceptional digital experiences."
              className=""
            />
            <ToolboxItems
              items={toolboxItems}
              className=""
            />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm." className="" />
            <div className="relative flex-1">
              {hobbies.map(hobby => (
                <div key={hobby.title} className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
                  left: hobby.left,
                  top: hobby.top,
                }}>
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image src={MapImage} alt="map" className="h-full w-full object-cover" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <Image src={smileMemoji} alt="smile memoji" className="size-20" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
