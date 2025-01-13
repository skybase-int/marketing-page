import {
  Popover,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverTrigger
} from '@/app/components/ui/popover';
import { Close, Info } from './icons';
import { Text } from './Typography';
import { ExternalLink } from './ExternalLink';

const content = {
  str: {
    title: 'Sky Token Rewards Rate (STR)',
    description: (
      <Text className="leading-5 text-white/80" variant="ui-small-regular">
        The Sky Token Rewards (STR) rate is variable, and is determined by the following factors: the current
        issuance rate of the reward token in question, as set through the relevant onchain governance
        processes pertinent to the reward token in question (for example, SKY issuance rate is decided by the
        decentralised Maker/Sky ecosystem onchain governance), the current market price of the reward token in
        question, and the user’s proportional percentage of the total supply within the pool of funds accruing
        that particular reward. STR rate may be volatile. The rate provided here is an estimate of the
        relevant STR rate expressed in expected rate per annum, should be automatically updated every 5
        minutes and is powered by data provided by a third party (
        <ExternalLink href="https://blockanalitica.com/" className="hover:text-white hover:underline">
          BlockAnalitica
        </ExternalLink>
        ). This figure does not represent or guarantee future results.
      </Text>
    )
  },
  ssr: {
    title: 'SSR Rate (SSR)',
    description: (
      <Text className="leading-5 text-white/80" variant="ui-small-regular">
        The Sky Savings Rate (SSR) is variable, determined by decentralised Sky Ecosystem onchain governance,
        and configured on the Ethereum blockchain. Sky Ecosystem governance is able to adapt the SSR and other
        relevant parameters at any time at its discretion and without notice, based on market conditions,
        protocol surplus and other factors. The rate provided here is an estimate of the SSR expressed in
        expected compounded rate per annum, should be automatically updated every 5 minutes, and is powered by
        data provided by a third party (
        <ExternalLink href="https://blockanalitica.com/" className="hover:text-white hover:underline">
          BlockAnalitica
        </ExternalLink>
        ). This figure does not represent or guarantee future results.
      </Text>
    )
  }
};

export const PopoverRateInfo = ({ type }: { type: 'str' | 'ssr' }) => {
  if (!(type in content)) return null;

  return (
    <Popover>
      <PopoverTrigger>
        <Info />
      </PopoverTrigger>
      <PopoverContent align="center" side="top" className="backdrop-blur-lg">
        <div className="flex w-full justify-end pb-2">
          <PopoverClose>
            <Close className="h-5 w-5 cursor-pointer" />
          </PopoverClose>
        </div>
        {content[type].description}
        <PopoverArrow />
      </PopoverContent>
    </Popover>
  );
};
