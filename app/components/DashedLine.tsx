import React from 'react';

type DashedLineProps = {
  orientation?: 'horizontal' | 'vertical';
  dash?: number; // dash length in px
  gap?: number; // gap length in px
  thickness?: number; // stroke width in px
  length?: number | string; // e.g. 200, '100%', '12rem'
  color?: string; // e.g. 'currentColor', '#000'
  rounded?: boolean; // rounded dash ends
  dashOffset?: number; // optional: offset for animation
  className?: string;
  style?: React.CSSProperties;
};

const DashedLine: React.FC<DashedLineProps> = ({
  orientation = 'horizontal',
  dash = 8,
  gap = 6,
  thickness = 2,
  length = '100%',
  color = 'currentColor',
  rounded = true,
  dashOffset = 0,
  className,
  style,
}) => {
  const isHorizontal = orientation === 'horizontal';
  const w: number | string = isHorizontal ? length : thickness;
  const h: number | string = isHorizontal ? thickness : length;
  const mid = thickness / 2;

  return (
    <svg
      width={w}
      height={h}
      className={className}
      style={style}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <line
        x1={isHorizontal ? 0 : mid}
        y1={isHorizontal ? mid : 0}
        x2={isHorizontal ? '100%' : mid}
        y2={isHorizontal ? mid : '100%'}
        stroke={color}
        strokeWidth={thickness}
        strokeDasharray={`${dash} ${gap}`}
        strokeDashoffset={dashOffset}
        strokeLinecap={rounded ? 'round' : 'butt'}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

export default DashedLine;
