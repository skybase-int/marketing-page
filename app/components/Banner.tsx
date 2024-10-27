import { ExternalLink } from '@/app/components/ExternalLink';
import { Card } from './ui/card';
import { Text } from '@/app/components/Typography';
import { Info as InfoIcon } from './icons';
import { cn } from '../lib/utils';

export const Banner = ({
  title,
  url,
  cardClassName
}: {
  title: string;
  url: string;
  cardClassName?: string;
}) => {
  return (
    <Card
      className={cn(
        'flex w-full items-center bg-midnight-1 px-4 py-5 text-left text-white tablet:px-8 tablet:py-6',
        cardClassName
      )}
    >
      <div className="min-w-4">
        <InfoIcon />
      </div>
      <Text variant="ui-small-regular" className="pl-3 tablet:pl-5">
        <span>{`Some functionalities of Sky.money, including Sky Savings Rate, Sky Token Rewards and Seal Engine, are not available in selected jurisdictions, including the U.S. Please refer to the `}</span>
        <ExternalLink href={url}>
          <u>{title}</u>
        </ExternalLink>
      </Text>
    </Card>
  );
};
