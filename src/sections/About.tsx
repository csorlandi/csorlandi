import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png';
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HtmlIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import { TechIcon } from "@/components/TechIcon";
import MapImage from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/memoji-smile.png';

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
    title: 'Next.js',
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
  },
  {
    title: 'Photography',
    emoji: '📸',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
  },
  {
    title: 'Hiking',
    emoji: '🥾',
  },
  {
    title: 'Music',
    emoji: '🎶',
  },
  {
    title: 'Fitness',
    emoji: '🏋️',
  },
  {
    title: 'Reading',
    emoji: '📖',
  },
]

export const AboutSection = () => {
  return (
    <section>
      <SectionHeader title="A Glimpse Into My World" eyebrow="About me" description="Learn more about who I am, what I do, and what inspires me." />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectives.</p>
          </div>
          <Image src={bookImage} alt="Book Cover" />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbox</h3>
            <p>Explore the technologies and tools I use to craft exceptional digital experiences.</p>
          </div>
          <div>
            {toolboxItems.map(item => (
              <div key={item.title}>
                <TechIcon component={item.iconType} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>Beyond the Code</h3>
            <p>Explore my interests and hobbies beyond the digital realm.</p>
          </div>
          <div>
            {hobbies.map(hobby => (
              <div key={hobby.title}>
                <span>{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <Image src={MapImage} alt="map" />
          <Image src={smileMemoji} alt="smile memoji" />
        </Card>
      </div>
    </section>
  );
};
