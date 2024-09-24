'use client';

import { Text } from '@/app/components/Typography';

export const UserFlow: React.FC = () => {
  return (
    <div className="flex w-full  justify-center">
      <div className="flex w-full max-w-4xl justify-between">
        <div className="w-48 text-center">
          <Text>Connect your wallet</Text>
        </div>
        <div className="w-48 text-center">
          <Text>Share a post about Sky.Money on your Twitter account and sign a message</Text>
        </div>
        <div className="w-48 text-center">
          <Text>Receive an airdrop with extra farming rewards</Text>
        </div>
      </div>
    </div>
  );
};
