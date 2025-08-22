'use client';

import { useVpnCheck } from '@jetstreamgg/sky-hooks';
import { ReactNode, useMemo } from 'react';
import { UnauthorizedPage } from './checks/UnauthorizedPage';

// It needs to be inside the wagmi & rainbow provider to get the address from the hook if checking address
// We only check VPN, not address
export const AuthWrapper = ({ children }: { children: ReactNode }) => {
  const authUrl = process.env.NEXT_PUBLIC_AUTH_URL || '';

  const { data: vpnData, isLoading: vpnIsLoading, error: vpnError } = useVpnCheck({ authUrl });

  const isConnectedToVpn = vpnData?.isConnectedToVpn;

  const loaded = vpnData || vpnError;
  const isAllowed = useMemo(
    () => !vpnIsLoading && !isConnectedToVpn && !vpnError,
    [vpnIsLoading, isConnectedToVpn, vpnError]
  );

  return loaded && !isAllowed ? (
    <UnauthorizedPage vpnData={{ isConnectedToVpn, vpnIsLoading, vpnError }} />
  ) : (
    <>{children}</>
  );
};
