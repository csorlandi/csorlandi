import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type HeroOrbitProps = {
  size: number;
  rotation: number;
  orbitDuration?: number;
  shouldOrbit?: boolean;
  spinDuration?: number;
  shouldSpin?: boolean;
}

export function HeroOrbit({ children, size, rotation, orbitDuration = 10, shouldOrbit = false, spinDuration = 10, shouldSpin = false }: PropsWithChildren<HeroOrbitProps>) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className={twMerge(shouldOrbit && "animate-spin")} style={{
        animationDuration: `${orbitDuration}s`
      }}>
        <div className="flex items-start justify-start" style={{
          height: `${size}px`,
          width: `${size}px`,
          transform: `rotate(${rotation}deg)`
        }}>
          <div className={twMerge(shouldSpin && "animate-spin")} style={{
            animationDuration: `${spinDuration}s`
          }}>
            <div className="inline-flex" style={{
              transform: `rotate(${-rotation}deg)`
            }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}