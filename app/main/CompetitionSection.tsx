import djureTextSection from '~/assets/djure-text-section.svg';
import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import underline from '~/assets/underline-font.svg';
import yellowStar from '~/assets/yellow-star.svg';
import culinary from '~/assets/culinary.png';
import pbt from '~/assets/pbt.png';
import djureArena from '~/assets/djure-arena.png';
import firstAid from '~/assets/first-aid.png';
import aquaChampion from '~/assets/aqua-champion.png';
import campArena from '~/assets/camp-arena.png';
// import underlineCompetition from '~/assets/underline-competition.svg';

const CompetitionSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const competitions = [
    {
      img: culinary,
      title: 'Culinary',
    },
    {
      img: pbt,
      title: 'Emergency Stretcher',
    },
    {
      img: djureArena,
      title: 'Djure Arena',
    },
    {
      img: firstAid,
      title: 'First Aid',
    },
    {
      img: aquaChampion,
      title: 'Aqua Champion',
    },
    {
      img: campArena,
      title: 'Camp Arena',
      size: 'h-[19rem] lg:h-[34rem] relative bottom-2 pt-2',
    },
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;
    const content = contentRef.current;
    if (container && content) {
      const scrollLength = content.scrollWidth - container.clientWidth;
      const isMobile = window.innerWidth < 700; // 40rem = 640px
      const tween = gsap.to(content, {
        x: -scrollLength,
        ease: 'none',
        scrollTrigger: {
          trigger: isMobile ? '.competition-detail' : '#competition-title',
          start: 'top top',
          end: `+=${scrollLength}`,
          scrub: true,
          pin: '.competition-detail',
          anticipatePin: 1,
        },
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).competitionScrollTrigger = tween.scrollTrigger;
    }
  }, []);

  return (
    <section
      className="competition-detail bg-checkboard non-violet-section"
      id="kategori-lomba"
    >
      <h2
        className="z-10 flex max-w-[2400px] flex-col self-start px-4 pt-[8rem] lg:px-[4.2rem] lg:pt-[7.5rem]"
        id="competition-title"
      >
        <div className="font-artine text-5xl font-bold lg:text-[5.5rem]">
          Join the
        </div>
        <div className="relative w-fit">
          <div className="font-roman text-[3.25rem] leading-6 font-normal italic lg:text-[6rem]">
            competition
          </div>
          <img
            src={underline}
            alt="underline decoration"
            className="relative bottom-1 -left-1 -z-10 w-[16rem] lg:bottom-0 lg:w-[29rem]"
          />
          <img
            src={yellowStar}
            alt="yellow star decoration"
            className="lg: absolute -right-9 -bottom-4 -z-20 lg:-right-16 lg:-bottom-6 lg:w-[9.6rem]"
          />
        </div>
      </h2>

      <div
        className="mt-16 h-max w-screen max-w-[2400px] overflow-x-hidden"
        ref={containerRef}
      >
        <div
          className="flex w-max items-baseline gap-16 px-4 lg:px-[4.2rem]"
          ref={contentRef}
        >
          {competitions.map((competition, index) => (
            <div
              className="flex flex-col items-center gap-[1.4rem]"
              key={index}
            >
              <img
                key={index}
                src={competition.img}
                alt="competition decoration"
                className={`h-[17rem] w-max lg:h-[27rem] ${competition.size}`}
              />

              <div className="relative w-max">
                <p className="font-artine relative z-10 text-[1.85rem] font-bold text-[#2E1E5F80]">
                  {competition.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src={djureTextSection}
        alt="Djure text decoration"
        className="relative mt-auto ml-[-1rem] w-[calc(100vw+2rem)] max-[376px]:mt-[4.5rem] lg:mt-[9rem] lg:ml-[-2.5rem] lg:w-[calc(100vw+5rem)]"
      />
    </section>
  );
};

export default CompetitionSection;
