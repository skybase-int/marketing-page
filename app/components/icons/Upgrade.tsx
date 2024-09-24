import { IconProps } from './Icon';
import { IconVariantEnum, VariantIcon } from './VariantIcon';

export const Upgrade = ({
  variant = IconVariantEnum.mono,
  ...props
}: IconProps & { variant?: IconVariantEnum }) => {
  return (
    <VariantIcon
      {...props}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      variant={variant}
      monoIcon={
        <>
          <g id="type=mono" clipPath="url(#clip0_2069_17796)">
            <g id="Union">
              <path
                d="M20.0001 -0.0372314L39.7756 15.8273L34.7696 22.0675L20.0001 10.2189L5.23066 22.0675L0.224609 15.8273L20.0001 -0.0372314Z"
                fill="currentColor"
              />
              <path d="M25.0001 17V32H15.0001L15.0001 17L20.0001 13L25.0001 17Z" fill="currentColor" />
              <path d="M39.0001 40V34H1.00012V40H39.0001Z" fill="currentColor" />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_2069_17796">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </>
      }
      colorIcon={
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 34H39V40H1V34Z"
            fill="url(#paint0_linear_4068_13338)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 10L25 34H15L15 10L20 6L25 10Z"
            fill="url(#paint1_linear_4068_13338)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.0001 -0.0372314L39.7756 15.8273L34.7696 22.0675L20.0001 10.2189L5.23066 22.0675L0.224609 15.8273L20.0001 -0.0372314Z"
            fill="url(#paint2_linear_4068_13338)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_4068_13338"
              x1="1"
              y1="37"
              x2="38.9998"
              y2="37.081"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F7A7F9" />
              <stop offset="1" stopColor="#00DDFB" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_4068_13338"
              x1="15"
              y1="34"
              x2="15"
              y2="10.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFF3D0" />
              <stop offset="1" stopColor="#FFC044" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_4068_13338"
              x1="20.0001"
              y1="24"
              x2="20.0001"
              y2="-0.0372254"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFCD6B" />
              <stop offset="1" stopColor="#EA5DD3" />
            </linearGradient>
          </defs>
        </>
      }
    />
  );
};
