import cn from 'classnames';
import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export type TypographyVariant =
  | 'auth-main'
  | 'auth-sub'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'p1-regular'
  | 'p1-medium'
  | 'p1-bold'
  | 'p2-regular'
  | 'p2-medium'
  | 'p2-bold'
  | 'p3-14'
  | 'p3-16'
  | 'p3-18'
  | 'c1-regular'
  | 'c1-medium'
  | 'c1-bold'
  | 'label';

type Props = HTMLAttributes<ElementType> & {
  className?: string;
  as?: ElementType;
  variant?: TypographyVariant;
  children?: ReactNode;
};

export const Typography = ({ className, as: Component = 'p', variant = 'p1-regular', children, ...props }: Props) => (
  <Component
    {...props}
    className={cn(
      'proportional-nums',

      { "font-bold font-inter text-[20px] leading-5 sm:text-[32px] sm:leading-10": variant === 'h1' },
      { "font-bold font-inter text-[15px] leading-5 sm:text-3xl sm:leading-10": variant === 'h2' },
      { "font-bold font-inter text-[12px] leading-5 sm:text-xl sm:leading-[26px]": variant === 'h3' },

      { "font-inter text-[14px] leading-[20px] sm:text-base": variant === 'p1-regular' },
      { "font-inter font-medium text-[14px] leading-[20px] sm:text-base": variant === 'p1-medium' },
      { "font-bold font-inter text-[14px] leading-[20px] sm:text-base": variant === 'p1-bold' },

      { "font-inter text-[12px] leading-4 sm:text-sm sm:leading-[22px]": variant === 'p2-regular' },
      { "font-inter font-medium text-[12px] leading-4 sm:text-sm sm:leading-[22px]": variant === 'p2-medium' },
      { "font-bold font-inter text-[12px] leading-4 sm:text-sm sm:leading-[22px]": variant === 'p2-bold' },

      className,
    )}
  >
    {children}
  </Component>
);
