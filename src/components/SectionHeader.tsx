type SectionHeaderProps = {
  title: string;
  eyebrow: string;
  description: string;
}

export function SectionHeader({
  title, eyebrow, description
}: SectionHeaderProps) {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">{title}</h2>
      <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">{description}</p>
    </>
  );
}