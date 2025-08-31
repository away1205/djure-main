import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

type TextTickerProps = {
  children: ReactNode;
  isSkew?: boolean;
  bgPrimary?: 'primary' | 'black';
  speed?: number;
  direction?: 'left' | 'right';
};

function TextTicker({
  children,
  isSkew = false,
  speed = 0.5,
  direction = 'right',
}: TextTickerProps) {
  const slider = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  let xPercent = 0;
  let animationFrameId: number;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useGSAP(() => {
    const animation = () => {
      if (xPercent <= -100) {
        xPercent = 0;
      }
      if (xPercent > 0) {
        xPercent = -100;
      }

      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });
      gsap.set(thirdText.current, { xPercent: xPercent });

      if (direction === 'right') {
        xPercent += 0.03 * speed;
      } else {
        xPercent -= 0.03 * speed;
      }

      animationFrameId = requestAnimationFrame(animation);
    };

    animation();

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
      },
      x: '+=100px',
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // VERY IMPORTANT NOTE: GAP SPACING IS MAKING THE POSITION OF THE TEXT ELEMENT MESSED UP
  return (
    <div
      className={`container-ticker flex w-[100vw] ${isSkew && '-skew-y-1'} overflow-x-clip`}
    >
      <div
        className="relative left-[-50%] flex w-max flex-nowrap whitespace-nowrap"
        ref={slider}
      >
        <div
          ref={firstText}
          className="flex w-max text-xl font-medium text-nowrap"
        >
          {children}
        </div>

        <div
          ref={secondText}
          className="flex w-max text-xl font-medium text-nowrap"
        >
          {children}
        </div>

        <div
          ref={thirdText}
          className="flex w-max text-xl font-medium text-nowrap"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default TextTicker;
