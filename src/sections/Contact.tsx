import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
    <section className="container py-12 lg:py-20" id="contact">
      <div className="relative z-0 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 px-10 py-8 text-center text-gray-900 md:text-left">
        <div
          className="absolute inset-0 -z-10 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        />
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl">
              Let&apos;s create something amazing together
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Ready to bring your next project to life? Let&apos;s connect and
              discuss how I can help you achieve your goals.
            </p>
          </div>
          <a
            className="inline-flex h-12 w-max items-center gap-2 rounded-xl border border-gray-900 bg-gray-900 px-6 text-white md:flex-none"
            href="mailto:claudiosorlandi@gmail.com"
          >
            <span className="font-semibold">Contact Me</span>
            <ArrowUpRightIcon className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
