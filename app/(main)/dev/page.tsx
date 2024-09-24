import { Heading, Text } from '@/app/components/Typography';
import { UserFlow } from '@/app/components/UserFlow';
import { UserDataExample } from '@/app/components/UserDataExample';
import { Suspense } from 'react';
import { DevNavigation } from '@/app/components/DevNavigations';
import { SkyLoading } from '@/app/components/SkyLoading';
import { ProximityGlowButton } from '@/app/components/ProximityGlowButton';
import { InternalLink } from '@/app/components/InternalLink';

// this is a temporary page for displaying dev PoC stuff
export default async function Dev() {
  return (
    <div>
      <div>
        <DevNavigation />
      </div>
      <SkyLoading />
      <InternalLink href="/register">
        <ProximityGlowButton pathname="/register" />
      </InternalLink>
      <Heading tag="h1" className=" text-center text-8xl font-extrabold tracking-tight">
        Welcome to phase one app
      </Heading>
      <UserFlow />
      <UserDataExample />
      <Text>React Server Component</Text>
      <Suspense fallback={<h2>Loading users tweets...</h2>}></Suspense>
    </div>
  );
}
