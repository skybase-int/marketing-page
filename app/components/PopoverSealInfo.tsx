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
import { getTooltipById } from '@/app/data';
import { parseMarkdownLinks } from '@/app/utils/parseMarkdownLinks';

const getContent = () => {
  // Get tooltips from centralized system
  const borrowTooltip = getTooltipById('borrow');
  const borrowRateTooltip = getTooltipById('borrow-rate');
  const delegateTooltip = getTooltipById('choose-your-delegate');
  const stakingRewardsRateTooltip = getTooltipById('staking-rewards-rates-srrs');

  return {
    borrow: {
      title: borrowTooltip?.title || '',
      description: (
        <Text className="leading-5 text-white/80" variant="ui-small-regular">
          {parseMarkdownLinks(borrowTooltip?.tooltip)}
        </Text>
      )
    },
    borrowRate: {
      title: borrowRateTooltip?.title || '',
      description: (
        <Text className="leading-5 text-white/80" variant="ui-small-regular">
          {parseMarkdownLinks(borrowRateTooltip?.tooltip)}
        </Text>
      )
    },
    delegate: {
      title: delegateTooltip?.title || '',
      description: (
        <Text className="leading-5 text-white/80" variant="ui-small-regular">
          {parseMarkdownLinks(delegateTooltip?.tooltip)}
        </Text>
      )
    },
    srr: {
      title: stakingRewardsRateTooltip?.title || '',
      description: (
        <Text className="leading-5 text-white/80" variant="ui-small-regular">
          {parseMarkdownLinks(stakingRewardsRateTooltip?.tooltip)}
        </Text>
      )
    }
  };
};

export const PopoverSealInfo = ({
  className,
  type
}: {
  className?: string;
  type: 'borrow' | 'borrowRate' | 'delegate' | 'srr';
}) => {
  const content = getContent();

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
