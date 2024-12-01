export const Header = () => {
  return (
    <header className="flex justify-center items-center fixed pt-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/50 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav-item">Home</a>
        <a href="#" className="nav-item">Projects</a>
        <a href="#" className="nav-item">About</a>
        <a href="#" className="nav-item nav-item-active">Contact</a>
      </nav>
    </header>
  );
};
