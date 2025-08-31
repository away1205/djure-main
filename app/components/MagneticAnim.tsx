'use client';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

function MagneticAnim({ children }: { children: React.ReactElement }) {
  const magnetic = useRef<HTMLElement | null>(null);
  const xToRef = useRef<gsap.QuickToFunc | null>(null);
  const yToRef = useRef<gsap.QuickToFunc | null>(null);
  const isActiveRef = useRef(false);

  useEffect(() => {
    let handleMouseMove: ((e: MouseEvent) => void) | null = null;
    let handleMouseLeave: (() => void) | null = null;

    const setupAnimation = () => {
      if (!magnetic.current) return;

      // Clean up previous animation if it exists
      if (isActiveRef.current) {
        gsap.killTweensOf(magnetic.current);
        if (handleMouseMove) {
          magnetic.current.removeEventListener('mousemove', handleMouseMove);
          handleMouseMove = null;
        }
        if (handleMouseLeave) {
          magnetic.current.removeEventListener('mouseleave', handleMouseLeave);
          handleMouseLeave = null;
        }
      }

      if (window.innerWidth >= 1024) {
        xToRef.current = gsap.quickTo(magnetic.current, 'x', {
          duration: 1,
          ease: 'elastic.out(1, 0.3)',
        });
        yToRef.current = gsap.quickTo(magnetic.current, 'y', {
          duration: 1,
          ease: 'elastic.out(1, 0.3)',
        });

        handleMouseMove = (e: MouseEvent) => {
          if (!magnetic.current || !xToRef.current || !yToRef.current) return;
          const { clientX, clientY } = e;
          const rect = magnetic.current.getBoundingClientRect();
          const { width, height, left, top } = rect;
          const x = clientX - (left + width / 2);
          const y = clientY - (top + height / 2);
          xToRef.current(x * 0.5);
          yToRef.current(y * 0.5);
        };

        handleMouseLeave = () => {
          if (xToRef.current) xToRef.current(0);
          if (yToRef.current) yToRef.current(0);
        };

        magnetic.current.addEventListener('mousemove', handleMouseMove);
        magnetic.current.addEventListener('mouseleave', handleMouseLeave);
        isActiveRef.current = true;
      } else {
        isActiveRef.current = false;
      }
    };

    const handleResize = () => {
      setupAnimation();
    };

    // Initial setup
    setupAnimation();
    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (magnetic.current) {
        gsap.killTweensOf(magnetic.current);
        if (handleMouseMove) {
          magnetic.current.removeEventListener('mousemove', handleMouseMove);
        }
        if (handleMouseLeave) {
          magnetic.current.removeEventListener('mouseleave', handleMouseLeave);
        }
      }
    };
  }, []);

  return React.cloneElement(children, {
    ref: magnetic,
    style: {
      ...(children.props as React.HTMLAttributes<HTMLElement>).style,
      willChange: 'transform',
    },
  } as React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> });
}

export default MagneticAnim;
