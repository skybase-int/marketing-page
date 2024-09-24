import { IconProps } from './Icon';
import { IconVariantEnum, VariantIcon } from './VariantIcon';

export const Trade = ({
  variant = IconVariantEnum.mono,
  ...props
}: IconProps & { variant?: IconVariantEnum }) => (
  <VariantIcon
    {...props}
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    variant={variant}
    monoIcon={
      <>
        <g id="Group 1597879377">
          <circle
            id="Ellipse 4923"
            cx="9"
            cy="9"
            r="9"
            transform="matrix(1 0 0 -1 20 18)"
            fill="currentColor"
          />
          <circle id="Ellipse 4924" cx="9" cy="29" r="9" fill="currentColor" />
          <path
            id="Subtract"
            d="M20 15.2043L20 29.3977L29 37.9999L38 29.3977V15.2043C36.0379 18.0997 32.7389 19.9999 29 19.9999C25.2611 19.9999 21.9621 18.0997 20 15.2043Z"
            fill="currentColor"
          />
          <path
            id="Subtract_2"
            d="M0 22.8048L0 8.61879L9 0L18 8.61879V22.8048C16.0379 19.9038 12.7389 18 9 18C5.26111 18 1.96212 19.9038 0 22.8048Z"
            fill="currentColor"
          />
        </g>
      </>
    }
    colorIcon={
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
          <path d="M38 9H19V29L28.5 38L38 29V9Z" fill="url(#paint0_linear_4068_12733)" />
          <path d="M9.5 0L19 9V29H0V9L9.5 0Z" fill="url(#paint1_linear_4068_12733)" />
          <circle cx="9.5" cy="28.5" r="9.5" fill="url(#paint2_linear_4068_12733)" />
          <circle
            cx="9.5"
            cy="9.5"
            r="9.5"
            transform="matrix(1 0 0 -1 19 19)"
            fill="url(#paint3_linear_4068_12733)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_4068_12733"
              x1="28.5"
              y1="9"
              x2="28.5"
              y2="39"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#AAF2E1" />
              <stop offset="0.5" stopColor="#9FAEFF" />
              <stop offset="1" stopColor="#A273FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_4068_12733"
              x1="8.56552"
              y1="1.73145e-08"
              x2="8.56552"
              y2="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.104411" stopColor="#FFC044" />
              <stop offset="0.870303" stopColor="#FFF3D0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_4068_12733"
              x1="9.50001"
              y1="38"
              x2="9.50001"
              y2="19"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFCD6B" />
              <stop offset="1" stopColor="#EA5DD3" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_4068_12733"
              x1="9.025"
              y1="-1.98185e-07"
              x2="9.025"
              y2="19.95"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A273FF" />
              <stop offset="1" stopColor="#4331E9" />
            </linearGradient>
          </defs>
        </svg>
      </>
    }
  />
);
