import { Fragment } from 'react';

import StarIcon from '@/assets/icons/star.svg';

const words = [
  'Performant',
  'Accessible',
  'Secure',
  'Interactive',
  'Scalable',
  'User Friendly',
  'Responsive',
  'Maintainable',
  'Search Optimized',
  'Usable',
  'Reliable',
];

export const TapeSection = () => {
  return (
    <section className="overflow-x-clip py-16 lg:py-24">
      <div className="-mx-1 -rotate-3 bg-gradient-to-r from-emerald-300 to-sky-400">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none animate-markee gap-4 py-3 pr-4 [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div key={word} className="inline-flex items-center gap-4">
                    <span className="text-sm font-extrabold uppercase text-gray-900">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
