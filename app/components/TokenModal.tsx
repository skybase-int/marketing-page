import { Dispatch, SetStateAction, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { useAppContext } from '@/app/context/AppContext';
import { Heading, Text } from './Typography';
import { EmphasisHeading } from './EmphasisHeading';
import { Dialog, DialogContent } from './ui/dialog';

export const TokenModal = ({
  open,
  setOpen,
  heading,
  emphasisHeading,
  content,
  href,
  footer,
  illustration,
  imgAlt,
  labelOne,
  statOne,
  labelTwo,
  statTwo,
  showRisks
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  heading: string;
  emphasisHeading: string;
  content: React.ReactElement;
  href: string;
  footer: React.ReactElement;
  illustration: StaticImageData;
  imgAlt: string;
  labelOne: string;
  statOne: string;
  labelTwo: string;
  statTwo: string;
  showRisks: boolean;
}) => {
  const { setModalOpened } = useAppContext();

  useEffect(() => {
    setModalOpened(open);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-full" onOpenAutoFocus={e => e.preventDefault()}>
        <div className="flex w-full flex-col-reverse gap-16 desktop:flex-row desktop:justify-between desktop:gap-20 desktop-xl:gap-[140px]">
          <motion.div
            className="w-full desktop:w-1/2 desktop:pt-10 desktop-xl:pt-[60px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'tween', delay: 0.1 }}
          >
            <Heading tag="h1" className="mb-8 desktop:mb-12 desktop-xl:mb-[60px]">
              {heading}
              <EmphasisHeading text="" emphasisText={emphasisHeading} />
            </Heading>

            <div className="mb-10 flex flex-col gap-5 desktop:mb-[60px] desktop:gap-8 desktop:pr-16 desktop-xl:mb-20 desktop-xl:pr-[120px]">
              {content}
              {showRisks && (
                <Text variant="ui-small" className="text-black/60">
                  *Learn about risks{' '}
                  <a href={href} className="font-bold text-black/80 underline">
                    here
                  </a>
                  .
                </Text>
              )}
            </div>
            {footer}
          </motion.div>
          <div className="flex w-full flex-col desktop:w-1/2">
            <Image
              src={illustration}
              alt={imgAlt}
              className="mb-10 w-full self-center tablet:w-[380px] desktop:w-[440px] desktop-xl:mb-[60px] desktop-xl:w-[600px]"
            />
            <div className="flex justify-center gap-6">
              {statOne && (
                <div className="w-1/2 border-t border-black/20 pt-5">
                  <Text variant="p3" className="mb-2">
                    {labelOne}
                  </Text>
                  <Heading tag="h3">{statOne}</Heading>
                </div>
              )}
              {statTwo && (
                <div className="w-1/2 border-t border-black/20 pt-5">
                  <Text variant="p3" className="mb-2">
                    {labelTwo}
                  </Text>
                  <Heading tag="h3">{statTwo}</Heading>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
