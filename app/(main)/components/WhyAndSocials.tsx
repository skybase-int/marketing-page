import { Heading } from '@/app/components/Typography';
import { EmphasisHeading } from '@/app/components/EmphasisHeading';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/components/ui/tabs';
import { Accessible, Dependable, Resilient, UserCentric, Proven, Innovative } from '@/app/components/icons';
import Image from 'next/image';
import { VoiceMatters } from './VoiceMatters';
import { motion } from 'framer-motion';

type Category = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const categories: Category[] = [
  {
    title: 'Accessible',
    description: 'The decentralised Sky Protocol is easy to access and explore via Sky.money.',
    icon: <Accessible />
  },
  {
    title: 'Proven',
    description:
      'The Sky Protocol was built from the core module of the Maker Protocol, one of the largest and most popular decentralized finance protocols in the world.  ',
    icon: <Proven />
  },
  {
    title: 'Resilient',
    description:
      'Transparent governance of the Sky ecosystem aims to facilitate continual improvements of the Sky Protocol, regular independent security audits, and ongoing monitoring of the financial stability of USDS.',
    icon: <Resilient />
  },
  {
    title: 'User-centric',
    description:
      'Sky tokens are freely transferable and can be used in connection with any protocol or platform that supports them.',
    icon: <UserCentric />
  },
  {
    title: 'Innovative',
    description:
      'Fast-moving protocol innovation is driven in the ecosystem by independent Sky Stars, such as Spark.',
    icon: <Innovative />
  }
];

export function WhyAndSocials() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-x-0 bottom-[15%] top-0 tablet:bottom-[20%] desktop:bottom-[25%]">
        <Image src="/WhySkyBackground.png" sizes="100vw" fill alt="Earn rewards" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
      </div>
      {/* TODO: should we hide the horizontal scroll bar? */}
      <div className="relative mx-3 flex flex-col items-center pt-32 text-center tablet:mx-5 tablet:pt-44 desktop:mx-10 desktop:pt-64">
        <EmphasisHeading text="Why use the" emphasisText="Sky Protocol?" tag="h1" />
        <Tabs defaultValue={categories[0].title} className="mt-10 w-full desktop:mt-20">
          <div className="scrollbar-hidden absolute left-0 right-0 -ml-3 -mr-3 flex-grow overflow-x-auto pl-3 tablet:static tablet:ml-0 tablet:mr-0 tablet:w-full tablet:overflow-x-visible tablet:pl-0">
            <TabsList className="inline-flex gap-3 last:mr-3 tablet:flex tablet:flex-wrap tablet:last:mr-0 desktop:mb-16">
              {categories.map(category => {
                return (
                  <TabsTrigger key={category.title} value={category.title}>
                    {category.icon}
                    <span className="ml-3">{category.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
          {categories.map(category => {
            return (
              <TabsContent
                key={category.description}
                value={category.title}
                className="desktop:mx-42 mt-24 min-h-[325px] tablet:mx-10 tablet:mt-12"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ type: 'spring', duration: 1.2 }}
                  className="flex justify-center"
                >
                  <Heading tag="h3" className="max-w-[840px] text-center desktop-xl:max-w-[1200px]">
                    {category.description}
                  </Heading>
                </motion.div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
      <VoiceMatters />
    </div>
  );
}
