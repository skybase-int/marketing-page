import { IconProps } from './Icon';
import { IconVariantEnum, VariantIcon } from './VariantIcon';

export const Rewards = ({
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
      <g id="type=mono">
        <g id="Sky_Farming-Logomark-Monochrome">
          <path d="M20.9646 30.6751L31.6418 38.06L40 32.279L20.9646 19.1132V30.6751Z" fill="currentColor" />
          <path d="M19.0354 19.1132L0 32.2791L8.35819 38.06L19.0354 30.6751V19.1132Z" fill="currentColor" />
          <path
            d="M20.9646 13.5619L31.6418 20.9468L40 15.1659L20.9646 2.00002V13.5619Z"
            fill="currentColor"
          />
          <path d="M19.0354 2L0 15.1658L8.35819 20.9468L19.0354 13.5619V2Z" fill="currentColor" />
        </g>
      </g>
    }
    colorIcon={
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" viewBox="0 0 40 38" fill="none">
          <path
            d="M19.9999 0.329956L20.012 0.360517V11.8535L19.9999 11.8918L8.35812 19.9439L0 14.163L19.9999 0.329956Z"
            fill="url(#paint0_linear_2069_18140)"
          />
          <path
            d="M19.9999 17.4434L20.015 17.4791V28.9611L19.9999 29.0052L8.35811 37.0573L0 31.2764L19.9999 17.4434Z"
            fill="url(#paint1_linear_2069_18140)"
          />
          <path
            d="M20 0.330078V11.892L31.6417 19.944L39.9999 14.1631L20 0.330078Z"
            fill="url(#paint2_linear_2069_18140)"
          />
          <path
            d="M20 17.4434V29.0052L31.6417 37.0573L39.9999 31.2764L20 17.4434Z"
            fill="url(#paint3_linear_2069_18140)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2069_18140"
              x1="-1.78019e-06"
              y1="14.0884"
              x2="19.9999"
              y2="0.330091"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A273FF" />
              <stop offset="0.5" stopColor="#9FAEFF" />
              <stop offset="1" stopColor="#AAF2E1" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2069_18140"
              x1="3.43961e-07"
              y1="31.3103"
              x2="20"
              y2="17.4436"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F7A7F9" />
              <stop offset="1" stopColor="#6D28FF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2069_18140"
              x1="20"
              y1="0.330078"
              x2="39.9999"
              y2="14.1416"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EB5EDF" />
              <stop offset="1" stopColor="#FFCD6B" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_2069_18140"
              x1="39.9998"
              y1="31.2612"
              x2="19.9999"
              y2="17.4435"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00DDFB" />
              <stop offset="1" stopColor="#F7A7F9" />
            </linearGradient>
          </defs>
        </svg>
      </>
    }
  />
);
