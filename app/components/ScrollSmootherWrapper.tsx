import React, { useEffect } from 'react';
import ScrollSmoother from 'gsap/ScrollSmoother';
import gsap from 'gsap';

function ScrollSmootherWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollSmoother);
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1,
      smoothTouch: true,
    });
    window.scrollSmoother = smoother;
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}

export default ScrollSmootherWrapper;
