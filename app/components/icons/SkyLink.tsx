import { IconProps } from './Icon';
import { IconVariantEnum, VariantIcon } from './VariantIcon';

export const SkyLink = ({
  variant = IconVariantEnum.mono,
  ...props
}: IconProps & { variant?: IconVariantEnum }) => (
  <VariantIcon
    {...props}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    variant={variant}
    monoIcon={
      <>
        <g clipPath="url(#clip0_2133_23011)">
          <path
            d="M19.9999 0C31.0455 5.56634e-05 39.9997 8.95429 39.9997 19.9999C39.3246 19.9999 38.6574 19.9664 37.9995 19.9011C28.551 18.9629 21.0369 11.4488 20.0987 2.00027C20.0333 1.34237 19.9999 0.67509 19.9999 0Z"
            fill="currentColor"
          />
          <path
            d="M19.9998 9.1777C22.1942 13.9519 26.0477 17.8055 30.8219 19.9999H19.9998V9.1777Z"
            fill="currentColor"
          />
          <path
            d="M17.9996 39.9012C18.6575 39.9665 19.3247 40 19.9998 40V39.9351C19.9977 39.2822 19.9644 38.6366 19.9011 37.9997C18.9629 28.5512 11.4488 21.0371 2.00027 20.0989C1.34237 20.0335 0.675091 20.0001 0 20.0001C0 20.6752 0.0334492 21.3425 0.0987775 22.0004C1.03702 31.4489 8.55107 38.963 17.9996 39.9012Z"
            fill="currentColor"
          />
          <path
            d="M19.9998 30.8219C17.8054 26.0479 13.9519 22.1945 9.17792 20.0001L19.9998 19.9999V30.8219Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_2133_23011">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </>
    }
    colorIcon={
      <>
        <path d="M20 0L39.9999 19.9999H20V0Z" fill="url(#paint0_linear_2133_23072)" />
        <path d="M20 40L0.000102838 20.0001L20 20.0001L20 40Z" fill="url(#paint1_linear_2133_23072)" />
        <path
          d="M20 0C31.0456 0 39.9999 8.95426 39.9999 19.9999C28.9543 19.9999 20 11.0456 20 0Z"
          fill="url(#paint2_linear_2133_23072)"
        />
        <path
          d="M20 40C8.95436 40 0.000101872 31.0457 0.000102838 20.0001C11.0457 20.0001 20 28.9544 20 40Z"
          fill="url(#paint3_linear_2133_23072)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2133_23072"
            x1="30"
            y1="9.99995"
            x2="16.5552"
            y2="20.5865"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4331E9" />
            <stop stopColor="#4331E9" />
            <stop offset="1" stopColor="#A273FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2133_23072"
            x1="24.8596"
            y1="15.1405"
            x2="10.0001"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFCD6B" />
            <stop offset="1" stopColor="#EA5DD3" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2133_23072"
            x1="20"
            y1="0"
            x2="42.3839"
            y2="22.3839"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#AAF2E1" />
            <stop offset="0.5" stopColor="#9FAEFF" />
            <stop offset="1" stopColor="#A273FF" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_2133_23072"
            x1="20"
            y1="40"
            x2="-3.84905"
            y2="16.151"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFE8D4" />
            <stop offset="1" stopColor="#B68EFF" />
            <stop offset="1" stopColor="#B68EFF" />
            <stop offset="1" stopColor="#B68EFF" />
          </linearGradient>
        </defs>
      </>
    }
  />
);
