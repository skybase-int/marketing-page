'use client';

import { Heading, Text } from '@/app/components/Typography';
import { useHasMounted } from '@/app/hooks/useHasMounted';
import { Skeleton } from './ui/skeleton';

export function UserDataExample() {
  const mounted = useHasMounted();

  if (!mounted)
    return (
      <div className="space-y-2">
        <Skeleton className="h-8 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    );

  return (
    <div className="mb-5">
      <Heading tag="h3">User Data</Heading>
      <Text className="mt-2">{'No tweets found'}</Text>
    </div>
  );
}
