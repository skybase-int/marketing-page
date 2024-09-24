'use client';

import { motion } from 'framer-motion';
import { Icon, IconProps } from './Icon';

export const OpenCloseMenu = ({ isOpen, ...props }: IconProps & { isOpen: boolean }) => (
  <Icon {...props} width="23" height="23" viewBox="0 0 23 23" fill="none">
    <motion.path
      variants={{
        closed: { d: 'M 3 9 L 20 9' },
        open: { d: 'M 5 18 L 18 5' }
      }}
      animate={isOpen ? 'open' : 'closed'}
      stroke={props.stroke}
      strokeWidth={props.strokeWidth}
    />
    <motion.path
      variants={{
        closed: { d: 'M 3 15 L 20 15' },
        open: { d: 'M 5 5 L 18 18' }
      }}
      animate={isOpen ? 'open' : 'closed'}
      stroke={props.stroke}
      strokeWidth={props.strokeWidth}
    />
  </Icon>
);
