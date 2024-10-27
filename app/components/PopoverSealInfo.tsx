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
        determined the moment you unseal your MKR. The moment the Seal Engine launched, the exit fee rate was
        set to 5% of the value of MKR tokens you’ve sealed, with a 1% increase every 6 months thereafter until
        it reaches the long-term fee rate of 15%.
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
  }
};

export const PopoverSealInfo = ({
  className,
  type
}: {
  className?: string;
  type: 'exitFee' | 'borrow' | 'borrowRate';
}) => {
  if (!(type in content)) return null;

  return (
    <Popover>
      <PopoverTrigger>
        <Info />
      </PopoverTrigger>
      <PopoverContent align="center" side="top" className={cn('backdrop-blur-lg', className)}>
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
