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

      { "font-inter font-normal text-[40px] leading-[52px]": variant === 'auth-main' },
      { "font-inter font-normal text-[24px] leading-[36px]": variant === 'auth-sub' },
      { "font-bold font-inter text-[32px] leading-10": variant === 'h1' },
      { "font-bold font-inter text-3xl leading-10": variant === 'h2' },
      { "font-bold font-inter text-xl leading-[26px]": variant === 'h3' },

      { 'font-inter text-base': variant === 'p1-regular' },
      { "font-inter font-medium text-base": variant === 'p1-medium' },
      { "font-bold font-inter text-base": variant === 'p1-bold' },

      { 'font-inter text-sm leading-[22px]': variant === 'p2-regular' },
      { "font-inter font-medium text-sm leading-[22px]": variant === 'p2-medium' },
      { "font-bold font-inter text-sm leading-[22px]": variant === 'p2-bold' },

      { 'font-manrope text-sm leading-4': variant === 'p3-14' },
      { 'font-manrope text-base leading-5': variant === 'p3-16' },
      { 'font-manrope text-lg leading-5': variant === 'p3-18' },

      { 'font-inter text-xs leading-[18px]': variant === 'c1-regular' },
      { "font-inter font-medium text-xs leading-[18px]": variant === 'c1-medium' },
      { "font-bold font-inter text-xs leading-[18px]": variant === 'c1-bold' },

      { "font-inter font-medium text-xs": variant === 'label' },

      className,
    )}
  >
    {children}
  </Component>
);
