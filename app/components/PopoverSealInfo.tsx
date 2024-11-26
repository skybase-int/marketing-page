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
  exitFee: {
    title: 'Exit fee',
    description: (
      <Text className="leading-5 text-white/80" variant="ui-small-regular">
        When you supply MKR to the Seal Engine, a position is created and those tokens are sealed behind an
        exit fee. You can seal and unseal your tokens anytime.
        <br />
        <br />
        Unsealing requires payment of an exit fee—a percentage of the total amount of tokens you’ve sealed in
        that position. The fee is automatically subtracted from that total amount, and then burnt, removing
        the tokens from circulation. Your accumulated rewards are not affected.
        <br />
        <br />
        The exit fee is a risk parameter managed and determined (regardless of position duration) by Sky
        ecosystem governance. The exit fee applies at unsealing, not at sealing, which means that it is
        determined the moment you unseal your MKR.
        <br />
        <br />
        The moment the Seal Engine launched, the exit fee rate was set to 5% of the value of MKR tokens you’ve
        sealed, with a 1% increase every 6 months thereafter until it reaches the long-term fee rate of 15%.
      </Text>
    )
  },
  borrow: {
    title: 'Borrow USDS against your MKR',
    description: (
      <Text className="leading-5 text-white/80" variant="ui-small-regular">
        Borrowing against your sealed position carries the risk of automatic liquidation without any
        possibility of recourse. Please ensure you fully understand these risks before proceeding.
      </Text>
    )
  },
  borrowRate: {
    title: 'Borrow Rate',
    description: (
      <Text className="leading-5 text-white/80" variant="ui-small-regular">
        The borrow rate is a parameter determined by Sky ecosystem governance through a process of
        decentralised onchain voting. Borrow rate fees accumulate automatically per block and get added to the
        total debt.
      </Text>
    )
  },
  delegate: {
    title: 'Choose your delegate',
    description: (
      <Text className="leading-5 text-white/80" variant="ui-small-regular">
        When you hold MKR or SKY tokens, you maintain the right to participate in the process of Sky ecosystem
        governance voting. That means that you have the ability to contribute to the community-driven,
        decentralised ecosystem decision-making process, which occurs through onchain voting.
        <br />
        <br />
        The voting power delegation feature of the Seal Engine of the Sky Protocol enables you to entrust your
        voting power to a delegate of your choosing, who can then vote in the Sky ecosystem governance process
        on your behalf. You can choose one delegate per sealed MKR or SKY position. If you want to entrust
        your MKR or SKY to two delegates using the Seal Engine, you will need to create two separate
        positions.
        <br />
        <br />
        Delegates in receipt of token voting power can never directly access any tokens delegated to them,
        including sealed tokens. Throughout the delegation process, you always own and are in control of your
        sealed tokens, and you can change your delegate at any time.Sealing to delegate your voting power may
        be a useful option for governance token holders who have limited time to allocate to the process, who
        want to save on the cost of gas involved in voting on their own, and who also want to earn Seal
        Rewards.
      </Text>
    )
  }
};

export const PopoverSealInfo = ({
  className,
  type
}: {
  className?: string;
  type: 'exitFee' | 'borrow' | 'borrowRate' | 'delegate';
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
