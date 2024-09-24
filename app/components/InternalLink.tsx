import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

interface InternalLinkProps {
  href: Url;
  shallow?: boolean | undefined;
  children: React.ReactNode;
}

export function InternalLink({ href, shallow, children }: InternalLinkProps) {
  return (
    <Link href={href} shallow={shallow}>
      {children}
    </Link>
  );
}
