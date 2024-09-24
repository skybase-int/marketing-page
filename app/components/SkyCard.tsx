import { TokenCard } from './TokenCard';
import { Text } from './Typography';
import { ButtonArrow, ButtonPlus } from './ui/button';
import { Link } from './ui/link';
import CoinSky from '@/public/coin_sky.png';
import { BP, useBreakpointIndex } from '../hooks/useBreakpointIndex';
import { useState } from 'react';
import MkrToSky from '@/public/mkr_to_sky.png';
import { TokenModal } from './TokenModal';
import { FetchedData } from '@/app/(main)/fetchData';
import { useSkyUrl } from '../hooks/useSkyUrl';
import { ExternalLink } from './ExternalLink';

export const SkyCard = ({ data }: { data: FetchedData }) => {
  const { bpi } = useBreakpointIndex();
  const [open, setOpen] = useState(false);
  const { url } = useSkyUrl('/?widget=upgrade&source_token=MKR');

  return (
    <>
      <TokenCard
        title="Rate 1:24,000"
        description="MKR to SKY"
        token={CoinSky}
        alt="SKY"
        content={
          <>
            <Text variant="p3-medium">SKY. The upgrade of MKR.</Text>
            <Text variant="p3" className="mt-1 text-black/80">
              SKY joins MKR as a Sky ecosystem governance token, representing an evolution in accessibility,
              user experience and scalability.
            </Text>
          </>
        }
        footer={
          <>
            <ButtonArrow variant="celestial-3" size="sm" onClick={() => setOpen(true)}>
              Learn More
            </ButtonArrow>
            <Link href={url} icon="arrowNoBg" target="_blank">
              {bpi <= BP.md ? 'Upgrade' : 'Upgrade MKR to SKY'}
            </Link>
          </>
        }
      />
      <TokenModal
        open={open}
        setOpen={setOpen}
        showRisks={false}
        heading="SKY."
        emphasisHeading="The upgrade of MKR."
        content={
          <Text variant="p1">
            SKY joins MKR as a Sky ecosystem governance token. By upgrading MKR to SKY at a rate of 1:24,000,
            you can start your Sky journey with more than just a fraction of the SKY token. 
            <br />
            <br />
            While only MKR can currently be used to vote onchain for governance proposals, decentralised SKY
            token voting is around the corner.  
            <br />
            <br />
            You’ll also soon be able to Activate and Seal your SKY to accumulate Activation Token Rewards.
            With the Sky Protocol, you can receive rewards without giving up control of your supplied assets. 
            <br />
            <br />
            Upgrading is optional.
          </Text>
        }
        // TODO: Add link to risks page
        href="#"
        footer={
          <ExternalLink href={url} noStyle>
            <ButtonArrow variant="celestial-3" size="sm">
              Upgrade MKR to SKY
            </ButtonArrow>
          </ExternalLink>
        }
        illustration={MkrToSky}
        imgAlt="Illustration of upgrading MKR to SKY"
        labelOne="SKY price"
        statOne={data.skyPrice}
        labelTwo="MKR to SKY Rate"
        statTwo="1:24,000"
      />
    </>
  );
};
