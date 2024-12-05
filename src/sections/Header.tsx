import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-center items-center fixed pt-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/50 rounded-full bg-white/10 backdrop-blur">
        <Link href="#hero" className="nav-item">Home</Link>
        <Link href="#projects" className="nav-item">Projects</Link>
        <Link href="#about" className="nav-item">About</Link>
        <Link href="#contact" className="nav-item nav-item-active">Contact</Link>
      </nav>
    </header>
  );
};
