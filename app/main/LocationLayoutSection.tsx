'use client';

import underline from '~/assets/underline-denah.svg';
import denahSekolah from '~/assets/denah-sekolah.png';
import folderDownload from '~/assets/folder-download.svg';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

function LocationLayoutSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    watchResize: false,
    align: 'center',
    // containScroll: 'trimSnaps',
    // dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Only runs in browser
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const slides = [
    { id: 'denah', content: denahSekolah },
    { id: 'denah2', content: denahSekolah },
    { id: 'denah3', content: denahSekolah },
  ];

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="layout-location bg-bg-white h-max" id="denah-lokasi">
      <div className="flex flex-col px-4 pt-[5rem] pb-[8rem] lg:px-[3.3rem] lg:pt-[11.5rem] lg:pb-[8.5rem]">
        <h2 className="relative z-10 flex flex-col items-center justify-center md:flex-row md:items-baseline md:gap-6">
          <div className="font-artine text-5xl font-bold md:text-[5.5rem]">
            Denah
          </div>

          <div className="relative w-fit">
            <div className="font-roman text-center text-[3.25rem] leading-8 font-normal italic md:text-[5.5rem] lg:text-[6rem]">
              lokasi
            </div>
            <img
              src={underline}
              alt="underline decoration"
              className="relative bottom-3 left-1/2 -z-10 w-[9.5rem] -translate-x-1/2 md:bottom-0 md:w-[15rem]"
            />
          </div>
        </h2>

        <div className="embla mt-8 overflow-hidden md:mt-16" ref={emblaRef}>
          <div className="embla__container flex h-[15rem] items-center md:h-[30rem] lg:h-[42rem]">
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                className={`embla__slide relative ml-4 transition-[flex-basis] duration-300 ease-in-out lg:ml-[3.6rem] ${
                  idx === selectedIndex
                    ? 'flex-[0_0_80%] lg:flex-[0_0_70%]'
                    : 'flex-[0_0_70%] lg:flex-[0_0_50%]'
                }`}
              >
                <div className="relative">
                  <img
                    src={slide.content}
                    alt={`Slide ${slide.id}`}
                    className="w-full"
                  />

                  <div
                    className={`embla__controls absolute top-1/2 w-full -translate-y-1/2 transition-opacity duration-300 ease-in-out ${idx === selectedIndex ? 'z-10 opacity-100' : 'opacity-0'}`}
                  >
                    <button
                      className="embla__prev left-0 -translate-x-1/3 rounded-full border bg-white p-1 shadow-[0_2px_1px_0_rgb(0,0,0)] md:p-2 lg:p-4 lg:shadow-[0_4px_1px_0_rgb(0,0,0)]"
                      onClick={onPrevButtonClick}
                      disabled={idx !== selectedIndex || prevBtnDisabled}
                    >
                      <IconChevronLeft
                        size={isMobile ? 24 : 32}
                        stroke={isMobile ? 2 : 3}
                      />
                    </button>
                    <button
                      className="embla__next absolute right-0 translate-x-1/3 rounded-full border bg-white p-1 shadow-[0_2px_1px_0_rgb(0,0,0)] md:p-2 lg:p-4 lg:shadow-[0_4px_1px_0_rgb(0,0,0)]"
                      onClick={onNextButtonClick}
                      disabled={idx !== selectedIndex || nextBtnDisabled}
                    >
                      <IconChevronRight
                        size={isMobile ? 24 : 32}
                        stroke={isMobile ? 2 : 3}
                      />
                    </button>
                  </div>
                </div>

                <p className="font-dm-sans mt-4 text-center text-[0.875rem] font-light lg:text-[1rem]">
                  {slide.id}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button className="bg-violet relative left-1/2 mt-6 flex w-fit -translate-x-1/2 items-center gap-2 rounded-full px-10 py-2 text-white md:px-[3.25rem] md:py-[1.rem]">
          <span className="text-[0.875rem] font-bold md:text-[1.25rem]">
            Download PDF
          </span>
          <img
            src={folderDownload}
            alt="download icon"
            className="h-[1.1rem] w-[1.1rem] md:h-[1.5rem] md:w-[1.5rem]"
          />
        </button>
      </div>

      <div className="bg-orange h-4 w-full lg:h-8"></div>
    </section>
  );
}

const usePrevNextButtons = (emblaApi: any) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export default LocationLayoutSection;
