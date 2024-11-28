import { PropsWithChildren } from 'react';

type HeroOrbitProps = {
  size: number;
  rotation: number;
}

export function HeroOrbit({ children, size, rotation }: PropsWithChildren<HeroOrbitProps>) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex items-start justify-start" style={{
        height: `${size}px`,
        width: `${size}px`,
        transform: `rotate(${rotation}deg)`
      }}>
        <div className="inline-flex" style={{
          transform: `rotate(${-rotation}deg)`
        }}>
          {children}
        </div>
      </div>
    </div>
  )
}