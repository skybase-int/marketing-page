import * as React from 'react';
import { Heading, Text } from '@/app/components/Typography';
import { EmphasisHeading } from '@/app/components/EmphasisHeading';
import { Card } from '@/app/components/ui/card';
import { Socials } from '@/app/components/Socials';

export function VoiceMatters() {
  return (
    <Card className="border-gradient-before before:bg-stained-stroke mx-3 mb-16 bg-transparent px-5 py-8 backdrop-blur-xl tablet:mx-5 tablet:px-10 tablet:py-12 desktop:mx-10 desktop:px-16 desktop:py-20">
      <div className="flex flex-wrap justify-between gap-8 desktop:flex-nowrap">
        <div className="mb-6 desktop:w-1/2 desktop:max-w-[500px]">
          <EmphasisHeading text="Speak up." emphasisText="Your voice&nbsp;matters." tag="h2" />
        </div>
        <div className="flex w-full flex-col desktop:w-1/2">
          <Heading tag="h6">Join one of the world&apos;s most active and trusted Web3 communities!</Heading>
          <Text variant="p2" className="mb-10 mt-4 max-w-[600px] desktop-xl:max-w-[740px]">
            Learn more about the decentralised Sky Protocol and ecosystem from a global and diverse community
            of active users. Ask questions, submit ideas, collaborate and help shape the future of the
            ecosystem.
          </Text>
          <Socials variant="outline" />
        </div>
      </div>
    </Card>
  );
}
