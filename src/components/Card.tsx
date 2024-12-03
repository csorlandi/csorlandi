import grainImage from '@/assets/images/grain.jpg';
import { PropsWithChildren } from 'react';
import { ClassNameValue, twMerge } from 'tailwind-merge';

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export function Card({ className, children }: CardProps) {
  return (
    <article className={twMerge("bg-gray-800 rounded-3xl relative overflow-hidden z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none", className)}>
      <div className="absolute inset-0 -z-10 opacity-5" style={{
        backgroundImage: `url(${grainImage.src})`
      }} />
      {children}
    </article>
  )
}