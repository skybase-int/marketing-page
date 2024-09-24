import { Icon, IconProps } from './Icon';

export const ChevronRight = (props: IconProps) => (
  <Icon {...props} width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.57269 6.48476L4.97269 10.7348L3.82812 9.76524L7.01751 6L3.82812 2.23476L4.97269 1.26524L8.57269 5.51524C8.80965 5.79498 8.80965 6.20502 8.57269 6.48476Z"
      fill="currentColor"
    />
  </Icon>
);

export const ChevronLeft = (props: IconProps) => (
  <Icon {...props} width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.42772 5.51524L7.02772 1.26524L8.17228 2.23476L4.9829 6L8.17228 9.76524L7.02772 10.7348L3.42772 6.48476C3.19076 6.20502 3.19076 5.79498 3.42772 5.51524Z"
      fill="currentColor"
    />
  </Icon>
);

export const ChevronUp = (props: IconProps) => (
  <Icon {...props} width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.51562 3.62771L1.26562 7.22771L2.23514 8.37228L6.00038 5.1829L9.76562 8.37228L10.7351 7.22771L6.48514 3.62771C6.2054 3.39076 5.79536 3.39076 5.51562 3.62771Z"
      fill="currentColor"
    />
  </Icon>
);

export const ChevronDown = (props: IconProps) => (
  <Icon {...props} width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.51562 8.37457L1.26562 4.77457L2.23514 3.63L6.00038 6.81939L9.76562 3.63L10.7351 4.77457L6.48514 8.37457C6.2054 8.61153 5.79536 8.61153 5.51562 8.37457Z"
      fill="currentColor"
    />
  </Icon>
);
