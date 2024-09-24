import { cn } from '../lib/utils';
import { useAppContext } from '../context/AppContext';
import { ALLOWED_DOMAINS } from '../constants';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  className?: string;
  noStyle?: boolean;
  skipConfirm?: boolean;
}

export function ExternalLink({
  href,
  children,
  target = '_blank',
  className,
  noStyle = false,
  skipConfirm
}: ExternalLinkProps) {
  const { setExternalLinkModalOpened, setExternalLinkModalUrl } = useAppContext();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!skipConfirm && !ALLOWED_DOMAINS.some(domain => href.includes(domain))) {
      e.preventDefault();
      setExternalLinkModalUrl(href);
      setExternalLinkModalOpened(true);
    }
  };

  return (
    <a
      className={noStyle ? '' : cn('text-white transition-colors hover:text-[#947EFF]', className)}
      href={href}
      target={target}
      onClick={handleLinkClick}
    >
      {children}
    </a>
  );
}
