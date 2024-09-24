import { cn } from '@/app/lib/utils';
import { Text } from '../Typography';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from './link';
import { Close } from '@/app/components/icons/Close';
import { BP, useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';
import * as Dialog from '@radix-ui/react-dialog';
import { useCallback } from 'react';

export const Pill = ({
  title,
  href,
  className,
  content,
  illustration,
  value,
  setOpenedPill,
  openedPill,
  expandedHeight,
  setVariant
}: {
  title: string;
  href: string;
  className?: string;
  content: string;
  illustration: React.ReactNode;
  value: 'one' | 'two' | 'three';
  setOpenedPill: React.Dispatch<React.SetStateAction<'one' | 'two' | 'three' | undefined>>;
  openedPill: 'one' | 'two' | 'three' | undefined;
  expandedHeight: number;
  setVariant: (value: 'animate' | 'hoverOne' | 'hoverTwo' | 'hoverThree') => void;
}) => {
  const isOpen = openedPill === value;
  const { bpi } = useBreakpointIndex();
  const isDesktop = bpi >= BP.xl;

  const TriggerWrapper = ({ children }: { children: React.ReactNode }) =>
    !isDesktop ? <Dialog.Trigger asChild>{children}</Dialog.Trigger> : <>{children}</>;

  const handlePillInteraction = useCallback(() => {
    if (!isOpen) {
      setOpenedPill(value);
      setVariant(
        `hover${value.charAt(0).toUpperCase() + value.slice(1)}` as 'hoverOne' | 'hoverTwo' | 'hoverThree'
      );
    } else {
      setVariant('animate');
    }
  }, [isOpen, setOpenedPill, setVariant, value]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={open => setOpenedPill(open ? value : undefined)}>
      <motion.div
        layout="position"
        className={cn(
          className,
          `${
            isOpen && !isDesktop
              ? 'border-effects-dark-stroke border !bg-white text-black'
              : 'effects-dark-fill text-white'
          } relative w-fit overflow-hidden rounded-full border border-[rgba(17,12,45,0.05)] p-4 shadow-glass-dark !backdrop-blur-[20px] hover:border-black/20 hover:bg-black/20 desktop:max-w-[244px]`,
          isOpen ? 'rounded-[20px]' : 'cursor-pointer'
        )}
        onClick={handlePillInteraction}
        onTap={handlePillInteraction}
      >
        <div className="flex justify-between">
          <TriggerWrapper>
            <motion.div
              className={cn('w-fit', isOpen ? 'cursor-pointer' : '')}
              onClick={() => setOpenedPill(prevValue => (prevValue ? undefined : value))}
            >
              <Text variant="ui-medium">{title}</Text>
            </motion.div>
          </TriggerWrapper>
          {isOpen && isDesktop && (
            <Close className="h-3.5 w-3.5 cursor-pointer" onClick={() => setOpenedPill(undefined)} />
          )}
        </div>
        <AnimatePresence>
          {isOpen && isDesktop && (
            <motion.div
              layout
              className="flex flex-col items-start"
              initial={{ opacity: 0, y: 50, height: 0 }}
              animate={{ opacity: 1, y: 0, height: expandedHeight }}
              transition={{ type: 'tween', duration: 0.35 }}
            >
              <Text variant="caption" className="my-[5px] text-left text-white/80">
                {content}
              </Text>
              <Link href={href} variant="light" className="mb-7">
                Learn more
              </Link>
              <div className="flex h-fit w-full justify-end">{illustration}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {!isDesktop && (
        <Dialog.Portal>
          <Dialog.Content className="fixed bottom-0 left-0 right-0 z-20 m-0 w-full rounded-t-[20px] bg-black/30 p-4 pt-5 text-white backdrop-blur-[20px] focus:outline-none tablet:left-4 tablet:right-4 tablet:mx-4 tablet:w-auto tablet:px-5 tablet:pt-5">
            <div className="mb-10 flex flex-row justify-between tablet:mb-8">
              <div className="flex flex-col gap-[5px] tablet:gap-2">
                <Text variant="p2">{title}</Text>
                <Text variant="p3" className="max-w-[247px] tablet:max-w-[320px]">
                  {content}
                </Text>
                <Link href={href} variant="light">
                  Learn more
                </Link>
              </div>
              <Dialog.Close asChild>
                <div onClick={() => setOpenedPill(undefined)} onTouchEnd={() => setOpenedPill(undefined)}>
                  <Close className="box-content cursor-pointer rounded-2xl border border-white p-4 text-white" />
                </div>
              </Dialog.Close>
            </div>
            <div className="flex h-fit w-full justify-end">{illustration}</div>
          </Dialog.Content>
        </Dialog.Portal>
      )}
    </Dialog.Root>
  );
};
