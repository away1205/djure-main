'use client';

import { useGSAP } from '@gsap/react';
import gsap, { Observer, ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import { useLocation } from 'react-router';
import React, { useState, useEffect } from 'react';

function Preloader() {
  const [counter, setCounter] = useState(0);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  gsap.registerPlugin(useGSAP, ScrollTrigger, Observer, ScrollToPlugin);

  const location = useLocation();
  const isHome = location.pathname === '/';

  useGSAP(() => {
    // Track asset loading
    let loadingProgress = 0;
    const totalAssets = 5; // Estimate of major assets to load
    let loadedAssets = 0;

    // Function to update loading progress
    const updateLoadingProgress = () => {
      loadedAssets++;
      loadingProgress = Math.min((loadedAssets / totalAssets) * 100, 95); // Cap at 95% until all assets are truly loaded
    };

    // 3-second timeout to prevent infinite loading
    const loadingTimeout = setTimeout(() => {
      loadingProgress = 100;
      setAssetsLoaded(true);
    }, 3000);

    // Check for images loading
    const images = document.querySelectorAll('img');
    if (images.length > 0) {
      images.forEach((img) => {
        if (img.complete) {
          updateLoadingProgress();
        } else {
          img.addEventListener('load', updateLoadingProgress);
          img.addEventListener('error', updateLoadingProgress); // Count errors as loaded too
        }
      });
    } else {
      // If no images found, simulate some loading
      for (let i = 0; i < totalAssets; i++) {
        setTimeout(updateLoadingProgress, i * 200);
      }
    }

    // Listen for window load event (all assets loaded)
    const handleWindowLoad = () => {
      clearTimeout(loadingTimeout); // Clear timeout if assets load normally
      loadingProgress = 100;
      setAssetsLoaded(true);
    };

    if (document.readyState === 'complete') {
      handleWindowLoad();
    } else {
      window.addEventListener('load', handleWindowLoad);
    }

    const timeCount = setInterval(() => {
      const max = 8;
      const min = 1;

      setCounter((cur) => {
        // Don't exceed the actual loading progress
        const targetProgress = Math.min(
          cur + Math.floor(Math.random() * (max - min + 1) + min),
          loadingProgress
        );

        if (targetProgress >= 100 && assetsLoaded) {
          clearInterval(timeCount);
          clearTimeout(loadingTimeout); // Clean up timeout
          return 100;
        }
        return targetProgress;
      });
    }, 120);

    const mm = gsap.matchMedia();

    // Mobile
    mm.add('(max-width: 1535px)', () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1.2,
          ease: 'power4.inOut',
          onUpdate: () => {
            gsap.to(window, { scrollTo: { y: 0, x: 0 }, duration: 1 });
          },
        },
      });

      tl.set('#hero-section', { width: '100%', scale: 1 });
      tl.add('init').fromTo(
        '.loader-counter',
        {
          yPercent: 100,
        },
        { opacity: 1, yPercent: 0 }
      );

      tl.to('#hero-section', { width: '100%', opacity: 1 })
        .add('show-hero')
        .to('#hero-section', {
          scale: 1,
          onComplete: () => {
            // Only fade out preloader when assets are loaded and counter is at 100%
            if (assetsLoaded && counter >= 100) {
              gsap.to('#preloader', {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.inOut',
                onComplete: () => {
                  gsap.set('#preloader', { display: 'none' });
                  ScrollTrigger.refresh();
                },
              });
            }
          },
        });
    });

    // Desktop
    mm.add('(min-width: 1536px)', () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1.2,
          ease: 'power4.inOut',
          onUpdate: () => {
            gsap.to(window, { scrollTo: { y: 0, x: 0 } });
          },
        },
      });

      tl.set('#hero-section', { width: '0%', scale: 0.16, translateY: -150 });
      tl.add('init').fromTo(
        '.loader-counter',
        {
          yPercent: 100,
        },
        { yPercent: 0, opacity: 1 }
      );

      tl.to('#hero-section', { width: '100%', opacity: 1 }, '<0.5')
        .add('show-hero')
        .to('#hero-section', {
          scale: 1,
          translateY: 0,

          onComplete: () => {
            // Only fade out preloader when assets are loaded and counter is at 100%
            if (assetsLoaded && counter >= 100) {
              gsap.to('#preloader', {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.inOut',
                onComplete: () => {
                  gsap.set('#preloader', { display: 'none' });
                  ScrollTrigger.refresh();
                },
              });
            }
          },
        });
    });
  }, []);

  // Handle case where assets finish loading after hero animation
  useEffect(() => {
    if (assetsLoaded && counter >= 100) {
      gsap.to('#preloader', {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set('#preloader', { display: 'none' });
          ScrollTrigger.refresh();
        },
      });
    }
  }, [assetsLoaded, counter]);

  return (
    <section
      id="preloader"
      className={`fixed top-0 left-0 z-60 h-dvh w-screen overflow-clip bg-white ${!isHome && 'hidden'}`}
    >
      <div className="loader-container flex h-dvh items-end justify-between px-4 sm:px-8 xl:items-center xl:justify-center xl:gap-[20rem] 2xl:gap-0">
        <div className="loader-item">
          <h2 className="loader-counter font-d1 relative text-[3rem] leading-none opacity-0 sm:text-[4.5rem] lg:text-[6rem] 2xl:min-w-[253px] 2xl:-translate-x-28">
            {counter}%
          </h2>
        </div>

        <div className="loader-item">
          <h2 className="loader-counter font-d1 relative text-[3rem] leading-none opacity-0 sm:text-[4.5rem] lg:text-[6rem] xl:translate-x-20 2xl:translate-x-[14rem]">
            DJURE
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Preloader;
