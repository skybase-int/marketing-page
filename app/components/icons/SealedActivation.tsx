import { IconProps } from './Icon';
import { IconVariantEnum, VariantIcon } from './VariantIcon';

export const SealedActivation = ({
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
        <g clipPath="url(#clip0_2069_17804)">
          <path
            d="M22.201 26.6072C26.1401 23.8212 28.7118 19.23 28.7118 14.0383C28.7118 8.84639 26.14 4.2552 22.2008 1.46917C23.5952 0.97439 25.0964 0.705078 26.6605 0.705078C34.0241 0.705078 39.9935 6.6745 39.9935 14.0382C39.9935 21.4018 34.0241 27.3712 26.6605 27.3712C25.0965 27.3712 23.5954 27.1019 22.201 26.6072Z"
            fill="currentColor"
          />
          <path
            d="M11.337 15.421C8.42706 17.8668 6.57759 21.5336 6.57759 25.6323C6.57759 32.996 12.547 38.9654 19.9107 38.9654C26.4495 38.9654 31.8889 34.2585 33.0255 28.048C31.0856 28.9308 28.9303 29.4225 26.6601 29.4225C18.6296 29.4225 12.0362 23.2697 11.337 15.421Z"
            fill="currentColor"
          />
          <path
            d="M26.5016 11.9869C26.2045 10.079 25.4951 8.24981 24.4133 6.63071C22.9482 4.43809 20.8659 2.72916 18.4296 1.72001C15.9933 0.710861 13.3124 0.446822 10.7261 0.961282C8.1397 1.47574 5.76398 2.74559 3.89931 4.61026C2.03465 6.47492 0.764798 8.85065 0.250338 11.437C-0.264122 14.0234 -8.23978e-05 16.7042 1.00907 19.1405C1.80555 21.0634 3.03796 22.7658 4.60004 24.1182C5.11632 18.8336 8.3065 14.3327 12.8 11.9864L12.8011 11.9869H26.5016Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_2069_17804">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </>
    }
    colorIcon={
      <>
        <path
          d="M19.9944 25.5413C23.9797 23.236 26.6609 18.9271 26.6609 13.992L26.6009 13.9444C26.583 9.04579 23.9147 4.76665 19.9639 2.46372L19.9944 2.44268C21.9555 1.30822 24.2324 0.658936 26.661 0.658936C34.0246 0.658936 39.9941 6.62836 39.9941 13.992C39.9941 18.9617 37.2751 23.2963 33.2437 25.5894C33.2437 25.5894 33.1932 25.7234 33.1753 25.7335C31.2455 26.8194 29.0351 27.4262 26.663 27.4262C24.2523 27.4262 21.991 26.7864 20.0396 25.6673C20.0252 25.659 19.9944 25.5413 19.9944 25.5413Z"
          fill="url(#paint0_linear_2069_18154)"
        />
        <path
          d="M33.2439 25.589C31.3017 26.694 29.0548 27.3251 26.6605 27.3251C19.2968 27.3251 13.3274 21.3557 13.3274 13.992L13.1958 13.9648C9.20472 16.2354 6.59519 20.509 6.54199 25.4165L6.57814 25.4886C6.5779 25.5211 6.57779 25.5537 6.57779 25.5863C6.57779 32.95 12.5472 38.9194 19.9109 38.9194C27.2736 38.9194 33.2425 32.9514 33.2439 25.589Z"
          fill="url(#paint1_linear_2069_18154)"
        />
        <path
          d="M24.4133 6.58456C25.8783 8.77717 26.6603 11.355 26.6603 13.992H13.3273C9.32219 16.2706 6.6127 20.5614 6.57808 25.4907C6.35512 25.3598 6.13557 25.2223 5.91976 25.0781C3.72715 23.613 2.01822 21.5307 1.00907 19.0944C-8.23499e-05 16.6581 -0.264122 13.9772 0.250338 11.3909C0.764798 8.8045 2.03465 6.42877 3.89931 4.56411C5.76398 2.69945 8.1397 1.42959 10.7261 0.915133C13.3124 0.400673 15.9933 0.664713 18.4296 1.67386C20.8659 2.68301 22.9482 4.39194 24.4133 6.58456Z"
          fill="url(#paint2_linear_2069_18154)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2069_18154"
            x1="23.8849"
            y1="27.3251"
            x2="29.9942"
            y2="0.658938"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F7A7F9" />
            <stop offset="1" stopColor="#00DDFB" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2069_18154"
            x1="1.70052"
            y1="30.4642"
            x2="24.7902"
            y2="43.7976"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F7A7F9" />
            <stop offset="1" stopColor="#6D28FF" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2069_18154"
            x1="-0.702382"
            y1="26.03"
            x2="21.0353"
            y2="2.71779"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFF3D0" />
            <stop offset="1" stopColor="#FFC044" />
          </linearGradient>
        </defs>
      </>
    }
  />
);