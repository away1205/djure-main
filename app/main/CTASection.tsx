import ctaMobile from '~/assets/cta-mobile.png';
import ctaDesktop from '~/assets/cta-desktop.png';
import Button from '~/components/Button';
import { Link } from 'react-router';

function CTASection() {
  return (
    <div className="bg-checkboard flex items-center justify-center">
      <div className="flex flex-col items-center xl:mt-[8rem]">
        <picture>
          {/* Mobile source first (matches phones) */}
          <source media="(max-width: 689px)" srcSet={ctaMobile} />

          {/* Desktop source for larger viewports */}
          <source media="(min-width: 690px)" srcSet={ctaDesktop} />

          <img
            src={ctaMobile}
            alt="Call to action"
            className="h-auto w-full max-w-[76rem]"
            loading="lazy"
            decoding="async"
          />
        </picture>

        <Link
          to="https://wa.me/6285756981005?text=Hai%21%20Saya%20mau%20ngobrol%20soal%20D'jure%2C%20bisa%20bantu%20saya%3F"
          className="mt-[6rem] lg:mb-[10rem]"
          target="_blank"
        >
          <Button className="text-white" buttonClassName="px-12 lg:px-[5.6rem]">
            Talk to Us
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CTASection;
