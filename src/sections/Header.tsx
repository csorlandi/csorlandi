import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed z-10 flex w-full items-center justify-center pt-3">
      <nav className="flex gap-1 rounded-full border border-white/50 bg-white/10 p-0.5 backdrop-blur">
        <Link className="nav-item" href="#hero">
          Home
        </Link>
        <Link className="nav-item" href="#projects">
          Projects
        </Link>
        <Link className="nav-item" href="#about">
          About
        </Link>
        <Link className="nav-item nav-item-active" href="#contact">
          Contact
        </Link>
      </nav>
    </header>
  );
};
