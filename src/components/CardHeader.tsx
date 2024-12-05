import { twMerge } from 'tailwind-merge';

import StarIcon from '@/assets/icons/star.svg';

type CardHeaderProps = {
  title: string;
  description: string;
  className?: string;
};

export function CardHeader({ title, description, className }: CardHeaderProps) {
  return (
    <div
      className={twMerge('flex flex-col gap-2 p-6 md:px-10 md:py-8', className)}
    >
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm text-white/60 lg:max-w-xs lg:text-base">
        {description}
      </p>
    </div>
  );
}
