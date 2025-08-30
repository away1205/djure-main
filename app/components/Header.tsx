import { Link } from 'react-router';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { ScrollSmoother } from 'gsap/ScrollSmoother';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

declare global {
  interface Window {
    competitionScrollTrigger: ScrollTrigger;
    scrollSmoother: ScrollSmoother;
  }
}

import headerCircleSm from '~/assets/header-circle-sm.svg';
import headerCircleLg from '~/assets/header-circle-lg.svg';
import djureLogo from '~/assets/djure-logo.svg';
import DashedLine from './DashedLine';
import iconEmail from '~/assets/footer-mail.svg';
import iconTiktok from '~/assets/footer-social-1.svg';
import iconInstagram from '~/assets/footer-social.svg';

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const headerContainerRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // const violetSectionsArr: HTMLElement[] =
  //   gsap.utils?.toArray<HTMLElement>('.violet-section') ?? [];

  // BG Animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // const anim = gsap.fromTo(
    //   headerRef.current,
    //   {
    //     background: 'rgba(54, 35, 111, 0.4)',
    //     backdropFilter: 'blur(20px)',
    //   },
    //   {
    //     background: '#2e1e5f',
    //     duration: 0.3,
    //   }
    // );

    // violetSectionsArr.forEach((section) => {
    //   ScrollTrigger.create({
    //     trigger: section,
    //     start: 'top',
    //     end: 'bottom',
    //     markers: true,
    //     onEnter: () => anim.play(),
    //     onEnterBack: () => anim.reverse(),
    //     onLeave: () => anim.reverse(),
    //     onLeaveBack: () => anim.reverse(),
    //   });
    // });
  }, []);

  // BUTTON TOGGLE ANIMATION
  useEffect(() => {
    if (isOpen) {
      gsap.to('#header-panel', {
        x: '-100%',
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      gsap.to('#header-panel', {
        x: '100%',
        duration: 0.5,
        opacity: 0,
        ease: 'power2.out',
      });
    }
  }, [isOpen]);

  // const smootherRef = useRef<any>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollSmoother);

    // if (ScrollSmoother) {
    //   smootherRef.current = ScrollSmoother.create({
    //     smooth: 1,
    //     effects: true,
    //   });
    // }

    // return () => {
    //   if (smootherRef.current) {
    //     try {
    //       smootherRef.current.kill();
    //     } catch (e) {
    //       // ignore kill errors
    //     }
    //     smootherRef.current = null;
    //   }
    // };
  }, []);

  return (
    <>
      <header
        id="header-container"
        // className="sticky top-4 left-0 z-50 w-full px-4 text-white"
        className="sticky top-0 left-0 z-50 w-full text-white"
        ref={headerContainerRef}
      >
        <div
          ref={headerRef}
          // className="flex justify-between rounded-lg px-4 py-3"
          className="bg-violet flex justify-between p-4 lg:p-8"
        >
          <img src={djureLogo} alt="D'jure Logo" className="lg:w-[7.5rem]" />

          <div className="flex items-center lg:flex-row-reverse">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                fill="none"
                className="h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]"
              >
                <path
                  d="M7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C3.35786 15 0 18.3579 0 22.5C0 26.6421 3.35786 30 7.5 30H22.5C26.6421 30 30 26.6421 30 22.5C30 18.3579 26.6421 15 22.5 15C26.6421 15 30 11.6421 30 7.5C30 3.35786 26.6421 0 22.5 0L7.5 0Z"
                  className="fill-[#14C28E] lg:fill-white"
                />
              </svg>

              <Link
                to="https://wa.me/6285756981005?text=Hai%21%20Saya%20mau%20ngobrol%20soal%20D'jure%2C%20bisa%20bantu%20saya%3F"
                className="bg-green font-dm-sans hidden px-5 py-3 text-[1.5rem] leading-[100%] font-bold text-white uppercase lg:block"
                target="_blank"
              >
                Contact us
              </Link>

              {/* ADDITIONAL SVG DESKTOP */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                className="hidden lg:block"
              >
                <g clipPath="url(#clip0_2519_47231)">
                  <path
                    d="M34.142 34.6421C30.3913 38.3929 25.3042 40.5 19.9999 40.5V20.545C19.9757 26.0472 15.5078 30.5 10 30.5C4.47715 30.5 2.41411e-07 26.0228 0 20.5C-2.41411e-07 14.9772 4.47715 10.5 10 10.5C15.5078 10.5 19.9757 14.9528 19.9999 20.455L19.9999 0.5C25.3042 0.500001 30.3913 2.60714 34.142 6.35787C37.8928 10.1086 39.9999 15.1957 39.9999 20.5C39.9999 25.8043 37.8928 30.8914 34.142 34.6421Z"
                    fill="#9C66F5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2519_47231">
                    <rect
                      width="40"
                      height="40"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <button
              id="header-open-btn"
              className="font-artine relative overflow-hidden rounded-[4.6rem] border px-4 py-2 text-[1.25rem] leading-[100%] font-bold lg:px-5 lg:py-3 lg:text-[1.5rem]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="menu-text">Menu</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                className="x-icon absolute inset-0 m-auto h-6 w-6 fill-white opacity-0"
              >
                <line
                  x1="1.52377"
                  y1="1.44657"
                  x2="16.3473"
                  y2="16.2701"
                  stroke="#36236F"
                  strokeWidth="2.64706"
                />
                <line
                  y1="-1.32353"
                  x2="20.9636"
                  y2="-1.32353"
                  transform="matrix(-0.707107 0.707107 0.707107 0.707107 16.999 2.38245)"
                  stroke="#36236F"
                  strokeWidth="2.64706"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        id="header-panel"
        className="fixed top-0 -right-[100%] z-90 flex h-screen w-full flex-col justify-between bg-[#9C66F5] text-white"
      >
        <div className="flex flex-col items-end px-4 py-4">
          <button
            id="header-open-btn"
            className="font-artine relative mb-[2.5rem] overflow-hidden rounded-full border bg-white p-6 text-[1.25rem] leading-[100%] font-bold lg:text-[1.5rem]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              className="x-icon strke-white absolute inset-0 m-auto h-6 w-6 stroke-[#36236F] opacity-100"
            >
              <line
                x1="1.52377"
                y1="1.44657"
                x2="16.3473"
                y2="16.2701"
                strokeWidth="2.64706"
              />
              <line
                y1="-1.32353"
                x2="20.9636"
                y2="-1.32353"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 16.999 2.38245)"
                strokeWidth="2.64706"
              />
            </svg>
          </button>

          <div className="flex w-full items-end justify-between">
            <SocialMedia setIsOpen={setIsOpen} />

            <div className="flex flex-col items-end">
              <div className="flex flex-col items-end lg:flex-row">
                <div className="flex items-center lg:flex-row-reverse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C4.47715 20 0 24.4772 0 30C0 35.5229 4.47715 40 10 40H30C35.5229 40 40 35.5229 40 30C40 24.4772 35.5229 20 30 20C35.5229 20 40 15.5228 40 10C40 4.47715 35.5229 0 30 0L10 0Z"
                      fill="white"
                    />
                  </svg>

                  <Link
                    to="#kategori-lomba"
                    onClick={() => {
                      setIsOpen(false);
                      window.competitionScrollTrigger?.disable();
                      window.scrollSmoother?.scrollTo('#kategori-lomba', true);
                      gsap.delayedCall(1, () =>
                        window.competitionScrollTrigger?.enable()
                      );
                    }}
                  >
                    <button className="header-btn-rounded">Competition</button>
                  </Link>
                </div>

                <div className="flex items-center">
                  <Link
                    to="#layout-kegiatan"
                    onClick={() => {
                      setIsOpen(false);
                      window.scrollSmoother?.scrollTo('#layout-kegiatan');
                    }}
                  >
                    <button className="header-btn">Kegiatan</button>
                  </Link>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2519_74184)">
                      <path
                        d="M6.86292 0C2.46866 4.39425 3.21061e-08 10.3541 0 16.5685C-3.21061e-08 22.783 2.46866 28.7428 6.86291 33.1371C11.2572 37.5313 17.217 40 23.4315 40C29.6459 40 35.6057 37.5314 40 33.1371L6.86292 0Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2519_74184">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <Link
                  to="#denah-lokasi"
                  className="max-lg:hidden"
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollSmoother?.scrollTo('#denah-lokasi', true);
                  }}
                >
                  <button className="header-btn-rounded">Denah</button>
                </Link>
              </div>

              <div className="flex flex-col items-end lg:flex-row">
                <div className="flex items-center">
                  <Link
                    to="#denah-lokasi"
                    className="lg:hidden"
                    onClick={() => {
                      setIsOpen(false);
                      window.scrollSmoother?.scrollTo('#denah-lokasi', true);
                    }}
                  >
                    <button className="header-btn-rounded">Denah</button>
                  </Link>
                  <Link
                    to="#partner-section"
                    onClick={() => {
                      setIsOpen(false);
                      window.scrollSmoother?.scrollTo('#partner-section', true);
                    }}
                  >
                    <button className="header-btn">Partner</button>
                  </Link>
                </div>

                <div>
                  <Link
                    to="#winner-section"
                    onClick={() => {
                      setIsOpen(false);
                      window.scrollSmoother?.scrollTo('#winner-section', true);
                    }}
                  >
                    <button className="header-btn-rounded">Winners</button>
                  </Link>
                </div>

                <div className="flex items-center">
                  <button className="header-btn">Contact Us</button>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M34.142 34.1421C30.3913 37.8929 25.3042 40 19.9999 40V20.045C19.9757 25.5472 15.5078 30 10 30C4.47715 30 2.41411e-07 25.5228 0 20C-2.41411e-07 14.4772 4.47715 10 10 10C15.5078 10 19.9757 14.4528 19.9999 19.955L19.9999 0C25.3042 1.03279e-06 30.3913 2.10714 34.142 5.85787C37.8928 9.6086 39.9999 14.6957 39.9999 20C39.9999 25.3043 37.8928 30.3914 34.142 34.1421Z"
                      fill="#FE7522"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-[2.5rem]">
          <div className="px-4 opacity-50">
            <DashedLine />
          </div>

          <div className="flex justify-between">
            <div>
              <p className="font-artine text-[4.6rem] leading-[80%] font-bold text-balance uppercase lg:max-w-[60rem] lg:text-[16.6rem]">
                Come <span className="font-roman font-normal italic">&</span>{' '}
                Join Us
              </p>

              <div className="lg:hidden">
                <SocialMedia setIsOpen={setIsOpen} />
              </div>
            </div>

            <picture className="relative top-8">
              <source srcSet={headerCircleLg} media="(min-width: 1024px)" />
              <img
                src={headerCircleSm}
                alt="2 circle decoration"
                className="mb-10"
              />
            </picture>

            <div className="absolute bottom-0 h-12 w-full bg-[#36236F] lg:h-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

function SocialMedia({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) {
  return (
    <div className="mb-5 flex items-center gap-5 px-4 py-6 lg:mb-0 lg:gap-10">
      <Link
        to="mailto:hello@rccd.space"
        target="_blank"
        onClick={() => setIsOpen(false)}
      >
        <img
          src={iconEmail}
          alt="email icon"
          className="h-[2rem] w-[2.5rem] lg:h-[2.5rem] lg:w-[3.15rem]"
        />
      </Link>
      <Link
        to="https://www.instagram.com/djure.2025/"
        target="_blank"
        onClick={() => setIsOpen(false)}
      >
        <img
          src={iconInstagram}
          alt="instagram icon"
          className="h-auto w-[2rem] lg:w-[2rem]"
        />
      </Link>
      <Link
        to="https://www.tiktok.com/@rccdubels"
        target="_blank"
        onClick={() => setIsOpen(false)}
      >
        <img
          src={iconTiktok}
          alt="tiktok icon"
          className="h-auto w-[2rem] lg:w-[2rem]"
        />
      </Link>
    </div>
  );
}

export default Header;
