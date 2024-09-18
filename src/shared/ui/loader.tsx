import { ColorRing } from 'react-loader-spinner';

interface Props {
  className?: string;
  loading?: boolean;
  size?: 's' | 'm' | 'l';
  color?: string;
  isCentered?: boolean;
}

const sizes = {
  s: '24',
  m: '48',
  l: '72',
};

export const Loader = ({ className, loading = true, size = 'm', color = '#0F40DB', isCentered = true }: Props) =>
  isCentered ? (
    <div className="flex h-full w-full items-center justify-center">
      <ColorRing
        wrapperClass={className}
        visible={loading}
        height={sizes[size]}
        width={sizes[size]}
        ariaLabel="loading"
        colors={[color, color, color, color, color]}
      />
    </div>
  ) : (
    <ColorRing
      wrapperClass={className}
      visible={loading}
      height={sizes[size]}
      width={sizes[size]}
      ariaLabel="loading"
      colors={[color, color, color, color, color]}
    />
  );
