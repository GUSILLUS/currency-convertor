import classnames from "classnames";
import { extendTailwindMerge } from "tailwind-merge";

const twMergeCustom = extendTailwindMerge({});

const cn = (...inputs: Parameters<typeof classnames>) => {
  const classes = classnames(inputs);
  return twMergeCustom(classes);
};

export { cn };
