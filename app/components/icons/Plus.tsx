'use client';

import { motion } from 'framer-motion';
import { Icon, IconProps } from './Icon';

export const Plus = ({
  isOpen = false,
  size = 12,
  grayOnClose = false,
  ...props
}: IconProps & { isOpen?: boolean; size?: number; grayOnClose?: boolean }) => (
  <Icon {...props} width={size} height={size} viewBox="0 0 12 12" fill="none">
    <motion.path
      animate={{
        rotate: isOpen ? 45 : 0
      }}
      transition={{ duration: 0.3 }}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.25 6.75L5.25 11.5H6.75L6.75 6.75L11.5 6.75V5.25L6.75 5.25V0.5L5.25 0.5V5.25H0.5L0.5 6.75H5.25Z"
      fill={isOpen ? 'currentColor' : grayOnClose ? '#706d7f' : 'currentColor'}
    />
  </Icon>
);
