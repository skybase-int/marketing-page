import { IconProps } from './Icon';
import { IconVariantEnum, VariantIcon } from './VariantIcon';

export const Save = ({
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
        <g id="type=mono" clipPath="url(#clip0_2069_17800)">
          <g id="Sky_Savings_Rate-Logomark-Monochrome">
            <path d="M31.4671 31.6985H39.7665V8.5746H31.4671V31.6985Z" fill="currentColor" />
            <path d="M8.86187 8.5746H0.5625V31.6985H8.86187L8.86187 8.5746Z" fill="currentColor" />
            <path d="M14.3764 17.0097H11.0464L11.0464 40.1337H14.3764V17.0097Z" fill="currentColor" />
            <path d="M29.2825 0.137207H16.5607L16.5607 40.1339H29.2825V0.137207Z" fill="currentColor" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2069_17800">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </>
    }
    colorIcon={
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M9.95241 8.57812H0.560835V31.7021H9.95241L9.9873 31.4437V17.2201L9.95241 17.0156V8.57812Z"
            fill="url(#paint0_linear_2069_18145)"
          />
          <path
            d="M15.4672 17.0132H9.95279V40.1371H15.4672L15.5322 39.9584V17.2638L15.4672 17.0132Z"
            fill="url(#paint1_linear_2069_18145)"
          />
          <path
            d="M30.3748 31.7019L39.7665 31.7019L39.7665 8.57796L30.3748 8.57796L30.2959 8.78485L30.2959 31.4849L30.3748 31.7019Z"
            fill="url(#paint2_linear_2069_18145)"
          />
          <rect
            width="14.9062"
            height="39.9967"
            transform="matrix(-1 0 0 1 30.3721 0.140625)"
            fill="url(#paint3_linear_2069_18145)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2069_18145"
              x1="9.95246"
              y1="31.7201"
              x2="9.95246"
              y2="8.55476"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#AAF2E1" />
              <stop offset="0.5" stopColor="#9FAEFF" />
              <stop offset="1" stopColor="#A273FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2069_18145"
              x1="15.4672"
              y1="40.1435"
              x2="15.4672"
              y2="17.0064"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD2B9" />
              <stop offset="1" stopColor="#FF6D6D" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2069_18145"
              x1="35.0707"
              y1="8.55961"
              x2="35.0707"
              y2="31.7202"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F7A7F9" />
              <stop offset="1" stopColor="#00DDFB" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_2069_18145"
              x1="14.9063"
              y1="40.0212"
              x2="14.9063"
              y2="-0.0196347"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F7A7F9" />
              <stop offset="1" stopColor="#6D28FF" />
            </linearGradient>
          </defs>
        </svg>
      </>
    }
  />
);
