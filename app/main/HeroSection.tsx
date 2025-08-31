import React, { useEffect } from 'react';
import djureLogo from '~/assets/djure-logo.svg';
import heroCampfire from '~/assets/hero-campfire.svg';
import heroImgSm from '~/assets/hero-img-sm.png';
import heroImgLg from '~/assets/hero-img-lg.png';
import Button from '~/components/Button';
import MagneticAnim from '../components/MagneticAnim';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

function HeroSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);

  const handleScrollToCompetition = () => {
    if (window.scrollSmoother) {
      window.scrollSmoother.scrollTo('#kategori-lomba', true);
    } else {
      gsap.to(window, {
        scrollTo: '#kategori-lomba',
        duration: 0.5,
      });
    }
  };

  return (
    <section
      className="bg-violet violet-section flex w-max flex-col text-white max-sm:min-h-screen"
      id="hero-section"
    >
      <div className="relative mt-20 flex flex-col overflow-clip">
        <div className="relative flex w-fit flex-col">
          <div className="relative">
            <img
              src={djureLogo}
              alt="D'jure Logo"
              className="mt-[4rem] w-screen"
            />
            <img
              src={heroCampfire}
              alt="Hero Campfire"
              className="absolute top-4 right-[10%] sm:top-[10rem] sm:left-[10%] sm:w-[6rem] md:left-[12%] lg:left-[13%] xl:top-[18rem] xl:w-[13rem]"
            />
          </div>

          <p className="font-artine px-4 text-[2.5rem] sm:py-5 md:px-[3.5rem] xl:text-[4.3rem]">
            competition 2025
          </p>
        </div>

        <div className="relative flex flex-col sm:-top-22 sm:right-[28%] sm:ml-auto sm:gap-4 md:right-[0%] xl:right-[0%] xl:gap-[2.5rem]">
          <p className="font-dm-sans mt-[2.2rem] w-[18.5rem] px-4 text-[0.875rem] text-balance uppercase opacity-60 lg:text-[1.25rem] xl:w-[30rem]">
            \\ DISELENGGARAKAN OLEH PALANG MERAH REMAJA SMP NEGERI 12 MAKASSAR
          </p>

          <div className="relative z-50 max-sm:hidden">
            <a onClick={handleScrollToCompetition}>
              <HeroButton />
            </a>
          </div>
        </div>

        <picture className="relative -left-[11.8rem] -mt-[4.2rem] w-[45rem] sm:-left-[28%] sm:-mt-[18.5rem] sm:w-[65rem] md:-left-[26%] md:w-[70rem] lg:-mt-[25rem] lg:w-[100rem] xl:-left-[21%] xl:-mt-[27rem] xl:w-[115rem] 2xl:-mt-[32rem] 2xl:w-[135rem]">
          <source media="(min-width: 640px)" srcSet={heroImgLg} />
          <img src={heroImgSm} alt="Hero Image" className="w-full" />
        </picture>
      </div>

      <div className="sm:hidden">
        <HeroButton fullWidth onClick={handleScrollToCompetition} />
      </div>
    </section>
  );
}

function HeroButton({
  fullWidth,
  onClick,
}: {
  fullWidth?: boolean;
  onClick?: () => void;
}) {
  return (
    <MagneticAnim>
      <div
        className={`mt-auto flex items-center gap-1 px-4 py-12 sm:py-0 xl:gap-4 ${fullWidth && 'w-screen'}`}
      >
        {/* flower icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          className="h-[42px] w-[42px] sm:max-md:hidden xl:h-[56px] xl:w-[56px]"
        >
          <g clipPath="url(#clip0_2516_30939)">
            <path
              d="M42 10.5C42 4.70101 37.299 -2.53482e-07 31.5 0C25.701 2.53482e-07 21 4.70101 21 10.5C21 4.70101 16.299 6.64457e-07 10.5 9.17939e-07C4.70101 1.37691e-06 -4.5897e-07 4.70101 0 10.5C2.53482e-07 16.299 4.70101 21 10.5 21C4.70101 21 6.64457e-07 25.701 9.17939e-07 31.5C1.17142e-06 37.299 4.70101 42 10.5 42C16.299 42 21 37.299 21 31.5C21 37.299 25.701 42 31.5 42C37.299 42 42 37.299 42 31.5C42 25.7024 37.3012 21.0022 31.5041 21C37.3012 20.9978 42 16.2976 42 10.5Z"
              fill="#14C28E"
            />
          </g>
          <defs>
            <clipPath id="clip0_2516_30939">
              <rect width="46" height="42" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <Button
          className="max-sm:w-full"
          buttonClassName="max-sm:w-full xl:px-[4.5rem] xl:py-[1rem]"
          onClick={onClick}
        >
          Lihat Lomba
        </Button>
      </div>
    </MagneticAnim>
  );
}

export default HeroSection;
