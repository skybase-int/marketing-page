import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type FormatOptions = {
  locale?: string;
  unit?: 'wad' | 'ray' | number;
  compact?: boolean;
  amount?: number;
  maxDecimals?: number;
};

const getSupportedNumberLocale = (locale: string): string => {
  const supportedLocale = Intl.NumberFormat.supportedLocalesOf(locale)[0];
  return supportedLocale || 'en-US';
};

function formatNumber(amount: number, locale: string): string {
  const localeToUse = getSupportedNumberLocale(locale);
  const formatter = new Intl.NumberFormat(localeToUse, {
    style: 'decimal'
  });
  return formatter.format(amount);
}

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export function isExternalUrl(url: string): boolean {
  return url.startsWith('http');
}

const linkVar = process.env.NEXT_PUBLIC_TERMS_LINK;

export function getTermsLink(): { url: string; name: string }[] {
  let termsLink: { url: string; name: string }[] = [{ url: '', name: '' }];
  try {
    if (linkVar) termsLink = JSON.parse(linkVar);
  } catch (error) {
    console.error('Error parsing TERMS_LINK:', error);
  }
  return termsLink;
}

const footerLinksVar = process.env.NEXT_PUBLIC_FOOTER_LINKS;

export function getFooterLinks(): { url: string; name: string }[] {
  let footerLinks: { url: string; name: string }[] = [
    { url: '', name: '' },
    { url: '', name: '' },
    { url: '', name: '' }
  ];
  try {
    if (footerLinksVar) footerLinks = JSON.parse(footerLinksVar);
  } catch (error) {
    console.error('Error parsing FOOTER_LINKS:', error);
  }
  return footerLinks;
}

export function getRandomL2Name(): string {
  // TODO: With the scarlett feature, 'arbitrum one' will become 'arbitrumone'
  return Math.random() > 0.5 ? 'base' : 'arbitrum one';
}
