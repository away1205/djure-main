import { IconArrowNarrowRight } from '@tabler/icons-react';
import type { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  buttonClassName?: string;
  /** click handler for the primary button */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** native button type for the primary button */
  type?: 'button' | 'submit' | 'reset';
  /** disable both buttons when true */
  disabled?: boolean;
  /** aria-label for the icon-only button */
  ariaLabel?: string;
  /** show the trailing icon button */
  showIcon?: boolean;
  /** override the default icon */
  icon?: ReactNode;
}

function Button({
  children,
  buttonClassName = '',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ariaLabel = 'Open',
  showIcon = true,
  icon,
}: ButtonProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`bg-orange h-fit cursor-pointer rounded-full px-7 py-2 text-[0.875rem] lg:px-16 lg:py-[1.3rem] lg:text-[1.25rem] ${buttonClassName}`}
      >
        {children}
      </button>

      {showIcon && (
        <button
          type="button"
          onClick={onClick}
          disabled={disabled}
          aria-label={ariaLabel}
          className="bg-orange h-fit cursor-pointer rounded-full p-2 lg:p-[1.3rem]"
        >
          {icon ?? <IconArrowNarrowRight />}
        </button>
      )}
    </div>
  );
}

export default Button;
