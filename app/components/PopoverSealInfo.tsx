import {
  Popover,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverTrigger
} from '@/app/components/ui/popover';
import { Close, Info } from './icons';
import { Text } from './Typography';
import { cn } from '../lib/utils';
import { ExternalLink } from '@/app/components/ExternalLink';

const content = {
  borrow: {
    title: 'Borrow USDS against your MKR',
    description: (
      <Text className="leading-5 text-white/80" variant="ui-small-regular">
        Borrowing against your staked position carries the risk of automatic liquidation without any
        possibility of recourse. Please ensure you fully understand these risks before proceeding.
      </Text>
    )
  },
  borrowRate: {
    title: 'Borrow Rate',
    description: (
      <Text className="leading-5 text-white/80" variant="ui-small-regular">
        The borrow rate is determined by Sky ecosystem governance through a process of decentralised onchain
        voting. Borrow rate fees accumulate automatically per block and get added to the total debt.
      </Text>
    )
  },
  delegate: {
    title: 'Choose your delegate',
    description: (
      <Text className="leading-5 text-white/80" variant="ui-small-regular">
        When you hold SKY tokens, you maintain the right to participate in the process of Sky ecosystem
        governance voting. That means that you have the ability to contribute to the community-driven,
        decentralised ecosystem decision-making process, which occurs through onchain voting.
        <br />
        <br />
        The voting power delegation feature of the Staking Engine of the Sky Protocol enables you to entrust
        your voting power to a delegate of your choosing, who can then vote in the Sky ecosystem governance
        process on your behalf. You can choose one delegate per staked SKY position. If you want to entrust
        your SKY to two delegates using the Staking Engine, you will need to create two separate positions.
        <br />
        <br />
        Delegates in receipt of token voting power can never directly access any tokens delegated to them,
        including staked tokens. Throughout the delegation process, you always own and are in control of your
        staked tokens, and you can change your delegate at any time. Staking to delegate your voting power may
        be a useful option for governance token holders who have limited time to allocate to the process, who
        want to save on the cost of gas involved in voting on their own, and who also want to earn Stake
        Rewards.
      </Text>
    )
  },
  srr: {
    title: 'Staking Rewards rate',
    description: (
      <Text className="leading-5 text-white/80" variant="ui-small-regular">
        The Staking Rewards Rate (SRR) is variable and may fluctuate. It is determined by: (1) the current
        issuance rate of the rewards set through onchain governance processes and (2) the market price of the
        staked SKY at the time of each calculation. Rewards are accrued in USDS for the time being, subject to
        future adjustment by onchain governance. The SRR provided is an estimated annual rate, updated using
        data from a third party provider (i.e.,{' '}
        <ExternalLink href="https://blockanalitica.com/" className="underline">
          BlockAnaltica
        </ExternalLink>
        ). Further, The estimate is for informational purposes only and does not guarantee future results.
      </Text>
    )
  }
};

export const PopoverSealInfo = ({
  className,
  type
}: {
  className?: string;
  type: 'borrow' | 'borrowRate' | 'delegate' | 'srr';
}) => {
  if (!(type in content)) return null;

  return (
    <Popover>
      <PopoverTrigger>
        <Info />
      </PopoverTrigger>
      <PopoverContent
        align="center"
        side="top"
        className={cn('w-[100vw] backdrop-blur-lg md:w-[500px]', className)}
      >
        <div className="flex w-full justify-end pb-2">
          <PopoverClose>
            <Close className="h-5 w-5 cursor-pointer" />
          </PopoverClose>
        </div>
        <div className="scrollbar-thin mt-2 max-h-[calc(var(--radix-popover-content-available-height)-64px)] overflow-y-auto">
          {content[type].description}
        </div>
        <PopoverArrow />
      </PopoverContent>
    </Popover>
  );
};
