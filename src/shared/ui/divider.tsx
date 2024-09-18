import cn from 'classnames';

import { Typography } from 'shared/ui';

interface Props {
  isHorizontal?: boolean;
  className?: string;
}

export const Divider = ({ className, isHorizontal }: Props) => (
  <div className={cn(className, {
    'h-full w-px': !isHorizontal,
    "h-px w-full": isHorizontal,
  })} />
);
