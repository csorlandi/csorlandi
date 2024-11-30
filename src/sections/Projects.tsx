import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg';

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return <section className="pb-16 lg:py-24">
    <div className="container">
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text">
          Real-world Results
        </p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">Featured Projects</h2>
      <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">See how I transformed concepts into engaging digital experiences.</p>
      <div className="flex flex-col mt-10 gap-20 md:mt-20">
        {portfolioProjects.map(project => (
          <article key={project.title} className="bg-gray-800 rounded-3xl relative overflow-hidden z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20">
            <div className="absolute inset-0 -z-10 opacity-5" style={{
              backgroundImage: `url(${grainImage.src})`
            }} />
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map(result => (
                    <li key={result.title} className="flex gap-2 text-sm text-white/50 md:text-base">
                      <CheckCircleIcon className="size-5 md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link}>
                  <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a>
              </div>
              <div className="relative">
                <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>;
};
