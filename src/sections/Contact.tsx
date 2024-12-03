import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
    <section className="container py-12 lg:py-20">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
        <div className="absolute inset-0 opacity-5 -z-10" style={{
          backgroundImage: `url(${grainImage.src})`
        }} />
        <div className="flex flex-col gap-8 items-center md:flex-row">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl">Let&apos;s create something amazing together</h2>
            <p className="text-sm md:text-base mt-2">Ready to bring your next project to life? Let&apos;s connect and discuss how I can help you achieve your goals.</p>
          </div>
            <button type="button" className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border md:flex-none border-gray-900">
              <span className="font-semibold">Contact Me</span>
              <ArrowUpRightIcon className="size-4" />
            </button>
        </div>
      </div>
    </section>
  )
};
