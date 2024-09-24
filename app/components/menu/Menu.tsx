import { cn } from '@/app/lib/utils';
import { motion } from 'framer-motion';

export const Menu = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.ul
      layout
      transition={{ delay: 0.3, duration: 0.2 }}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn('grid gap-3 p-6 pl-4', className)}
    >
      {children}
    </motion.ul>
  );
};
