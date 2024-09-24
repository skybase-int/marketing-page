import { cn } from '@/app/lib/utils';

type TokensSequenceFrameProps = {
  frameIndex: number;
  className: string;
  formattedFrameIndex: string;
  id?: string;
};

// 'will-change-transform' is supposed to help with animations and performace
export const TokensSequenceFrameMobile = ({
  frameIndex,
  className,
  formattedFrameIndex,
  id
}: TokensSequenceFrameProps) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      id={id}
      srcSet={`coins-sequence-mobile/Coins-animation_${formattedFrameIndex}.webp 400w`}
      sizes="(max-width: 479px) 100vw"
      className={cn('will-change-transform', className)}
      alt={`Coin sequence frame - Frame ${frameIndex}`}
    />
  );
};
export const TokensSequenceFrameTablet = ({
  frameIndex,
  className,
  formattedFrameIndex,
  id
}: TokensSequenceFrameProps) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      id={id}
      srcSet={`coins-sequence-tablet/Coins-animation_${formattedFrameIndex}.webp 600w`}
      sizes="(max-width: 479px) 100vw, (max-width: 979px) 489px, (max-width: 1919px) 810px, 1080px"
      className={cn('will-change-transform', className)}
      alt={`Coin sequence frame - Frame ${frameIndex}`}
    />
  );
};

export const TokensSequenceFrameDesktop = ({
  frameIndex,
  className,
  formattedFrameIndex,
  id
}: TokensSequenceFrameProps) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      id={id}
      srcSet={`coins-sequence-desktop-xl/Coins-animation_${formattedFrameIndex}.webp 1200w, coins-sequence-desktop/Coins-animation_${formattedFrameIndex}.webp 1000w`}
      sizes="(max-width: 479px) 100vw, (max-width: 979px) 489px, (max-width: 1919px) 810px, 1080px"
      className={cn('will-change-transform', className)}
      alt={`Coin sequence frame - Frame ${frameIndex}`}
    />
  );
};
