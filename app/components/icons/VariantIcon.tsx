import { SVGProps } from 'react';

type VariantIconProps = SVGProps<SVGSVGElement> & {
  boxSize?: number;
  variant: IconVariantEnum;
  monoIcon: React.ReactNode;
  colorIcon: React.ReactNode;
};

export enum IconVariantEnum {
  mono = 'mono',
  color = 'color'
}

export const VariantIcon = ({
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  boxSize,
  variant,
  monoIcon,
  colorIcon,
  ...props
}: VariantIconProps) => {
  return (
    <svg
      width={boxSize ? boxSize : width}
      height={boxSize ? boxSize : height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      {...props}
    >
      {variant === IconVariantEnum.mono ? monoIcon : colorIcon}
    </svg>
  );
};
