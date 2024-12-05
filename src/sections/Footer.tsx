import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const navLinks = [
  {
    title: 'Youtube',
    href: 'https://www.youtube.com/@cssorlandi',
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/cssorlandi',
  },
  {
    title: 'Linkedin',
    href: 'https://linkedin.com/in/csorlandi',
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute bottom-0 left-1/2 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom,black,transparent)]" />
      <div className="container z-0">
        <div className="flex flex-col items-center gap-8 border-t border-white/15 py-6 text-sm md:flex-row md:justify-between">
          <div className="text-white/40">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {navLinks.map((link) => (
              <a
                key={link.title}
                className="inline-flex items-center gap-1.5"
                href={link.href}
                rel="noreferrer"
                target="_blank"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
