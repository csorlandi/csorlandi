import Image from 'next/image';
import { Fragment } from 'react';

import memojiAvatar1 from '@/assets/images/memoji-avatar-1.png';
import memojiAvatar2 from '@/assets/images/memoji-avatar-2.png';
import memojiAvatar3 from '@/assets/images/memoji-avatar-3.png';
import memojiAvatar4 from '@/assets/images/memoji-avatar-4.png';
import memojiAvatar5 from '@/assets/images/memoji-avatar-5.png';
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';

const testimonials = [
  {
    name: 'Alex Turner',
    position: 'Marketing Manager @ TechStartups',
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: 'Olivia Green',
    position: 'Head of Design @ GreenLeaf',
    text: 'Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.',
    avatar: memojiAvatar2,
  },
  {
    name: 'Daniel White',
    position: 'CEO @ InnovateCo',
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: 'Emily Carter',
    position: 'Product Manager @ GlobalTech',
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: 'Michael Brown',
    position: 'Director of IT @ MegaCorp',
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          description="Don't just take my word for it. See what my clients have to say about my work."
          eyebrow="Happy Clients"
          title="What Clients Say about Me"
        />
        <div className="-my-4 mt-12 flex overflow-x-clip py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:mt-20">
          <div className="flex flex-none animate-markee gap-8 pr-8 [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs p-6 transition duration-300 hover:scale-[1.025] hover:animate-none hover:shadow-md hover:shadow-white/25 md:max-w-md md:p-8"
                  >
                    <div className="flex items-center gap-4">
                      <div className="inline-flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-gray-700">
                        <Image
                          alt={testimonial.name}
                          className="max-h-full"
                          src={testimonial.avatar}
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <span className="text-sm text-white/40">
                          {testimonial.position}
                        </span>
                      </div>
                    </div>
                    <p className="mt-4 text-sm md:mt-6 md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
