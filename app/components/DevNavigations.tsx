'use client';

import { InternalLink } from './InternalLink';
import { ButtonArrow } from './ui/button';

export function DevNavigation() {
  // TODO: Uncomment this to hide the dev navigation in production
  // if (process.env.NODE_ENV !== 'development') {
  //   return null;
  // }
  return (
    <>
      <InternalLink href="/">
        <ButtonArrow className="mr-4">Home</ButtonArrow>
      </InternalLink>
      <InternalLink href="/dev">
        <ButtonArrow className="mr-4">Dev</ButtonArrow>
      </InternalLink>
      <InternalLink href="/register">
        <ButtonArrow>Register</ButtonArrow>
      </InternalLink>
    </>
  );
}
