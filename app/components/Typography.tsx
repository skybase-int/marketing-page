import { cn } from '@/app/lib/utils';
import { graphikStdClassName } from '@/app/lib/fonts';

type TextElement = 'p' | 'span';
export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type ListElement = 'ul' | 'ol';
type TypographyElement = TextElement | HeadingElement;

interface TypographyProps {
  children: React.ReactNode;
  tag?: TypographyElement;
  className?: string;
  dataTestId?: string;
}

const ELEMENTS: Record<TypographyElement, string> = {
  h1: 'text-4xl -tracking-4 tablet:text-[56px] tablet:leading-[60px] desktop:text-[82px] desktop:leading-[80px] desktop-xl:text-[112px] desktop-xl:leading-[104px]',
  h2: 'text-[28px] leading-[28px] -tracking-3 tablet:text-[40px] tablet:leading-[40px] desktop:text-[56px] desktop:leading-[56px] desktop-xl:text-[72px] desktop-xl:leading-[72px]',
  h3: 'text-[28px] leading-[28px] -tracking-3 tablet:text-[32px] tablet:leading-[32px] desktop:text-[40px] desktop:leading-[40px] desktop-xl:text-[56px] desktop-xl:leading-[56px]',
  h4: 'text-[20px] leading-[22px] -tracking-3 tablet:text-[24px] tablet:leading-[28px] desktop:text-[32px] desktop:leading-[36px] desktop-xl:text-[40px] desktop-xl:leading-[44px]',
  h5: 'text-[18px] leading-[20px] -tracking-2 tablet:text-[24px] tablet:leading-[28px] desktop:text-[26px] desktop:leading-[26px] desktop-xl:text-[32px] desktop-xl:leading-[32px]',
  h6: 'text-[18px] leading-[20px] -tracking-2 desktop:text-[20px] leading-[22px] desktop-xl:text-[21px] desktop-xl:leading-[24px]',
  p: '',
  span: ''
  // p: `leading-normal text-base ${graphikStdClassName}`,
  // span: `leading-normal text-base ${graphikStdClassName}`
  // ...add other variants as needed
};

const Typography: React.FC<TypographyProps> = ({
  children,
  tag = 'span',
  className,
  dataTestId,
  ...props
}) => {
  const elementClass = ELEMENTS[tag];
  const Element = tag;

  return (
    <Element className={cn(elementClass, className)} data-testid={dataTestId} {...props}>
      {children}
    </Element>
  );
};

interface HeadingProps {
  children: React.ReactNode;
  tag?: HeadingElement;
  className?: string;
  dataTestId?: string;
}

export const Heading: React.FC<HeadingProps> = ({ className, tag = 'h1', ...props }) => {
  return <Typography tag={tag} className={cn('scroll-m-20 font-normal', className)} {...props} />;
};

export type TextVariant =
  | 'n1'
  | 'p1'
  | 'p2'
  | 'p2-medium'
  | 'p3'
  | 'p3-medium'
  | 'ui-large'
  | 'ui-medium'
  | 'ui-small'
  | 'ui-small-regular'
  | 'caption'
  | 'caption-medium'
  | 'h6-text';

interface TextProps {
  children: React.ReactNode;
  tag?: TextElement;
  variant?: TextVariant;
  className?: string;
  dataTestId?: string;
}

const TEXT_VARIANTS: Record<TextVariant, string> = {
  n1: 'font-normal text-[24px] leading-[24px] -tracking-2 tablet:text-[32px] tablet:leading-[32px] desktop:text-[36px] desktop:leading-[36px] desktop-xl:text-[54px] desktop-xl:leading-[54px]',
  p1: `font-normal ${graphikStdClassName} text-[18px] leading-[24px] -tracking-1 desktop:text-[24px] desktop:leading-[26px] desktop-xl:text-[21px] desktop-xl:leading-[28px]`,
  p2: `font-normal ${graphikStdClassName} text-[16px] leading-[22px] -tracking-1 desktop:text-[18px] desktop:leading-[24px] desktop-xl:text-[20px] desktop-xl:leading-[28px]`,
  'p2-medium': `font-medium ${graphikStdClassName} text-[16px] leading-[22px] -tracking-1 desktop:text-[18px] desktop:leading-[24px] desktop-xl:text-[20px] desktop-xl:leading-[28px]`,
  p3: `font-normal ${graphikStdClassName} text-[14px] leading-[18px] -tracking-1 desktop:text-[16px] desktop:leading-[21px] desktop-xl:text-[18px] desktop-xl:leading-[24px]`,
  'p3-medium': `font-medium ${graphikStdClassName} text-[14px] leading-[18px] -tracking-1 desktop:text-[16px] desktop:leading-[21px] desktop-xl:text-[18px] desktop-xl:leading-[24px]`,
  'ui-large': `font-medium ${graphikStdClassName} text-[18px] leading-[18px] -tracking-2`,
  'ui-medium': `font-medium ${graphikStdClassName} text-[16px] leading-[20px] -tracking-2`,
  'ui-small': `font-medium ${graphikStdClassName} text-[14px] leading-[14px] -tracking-1`,
  'ui-small-regular': `font-normal ${graphikStdClassName} text-[14px] leading-[14px] -tracking-1`,
  caption: `font-normal ${graphikStdClassName} text-[14px] leading-[20px] -tracking-1`,
  'caption-medium': `font-medium ${graphikStdClassName} text-[14px] leading-[20px] -tracking-1`,
  'h6-text': `font-normal ${graphikStdClassName} text-[18px] leading-[20px] -tracking-2 desktop:text-[20px] leading-[22px] desktop-xl:text-[21px] desktop-xl:leading-[24px]`
};

export const Text: React.FC<TextProps> = ({ variant = 'p1', className, tag = 'p', ...props }) => {
  const variantClass = variant ? TEXT_VARIANTS[variant] : '';
  return <Typography tag={tag} className={cn(variantClass, className)} {...props} />;
};

export type ListVariant = 'unordered' | 'ordered' | 'unorderedSmall';
interface ListProps {
  children: React.ReactNode;
  tag?: ListElement;
  variant?: ListVariant;
  className?: string;
  dataTestId?: string;
}

const LIST_VARIANTS: Record<ListVariant, string> = {
  unordered: `font-normal ${graphikStdClassName} text-[18px] leading-[24px] -tracking-1 desktop:text-[24px] desktop:leading-[26px] desktop-xl:text-[21px] desktop-xl:leading-[28px] list-disc [&>li]:mt-2 ml-8`,
  unorderedSmall: `font-normal ${graphikStdClassName} text-[14px] leading-[18px] -tracking-1 desktop:text-[16px] desktop:leading-[21px] desktop-xl:text-[18px] desktop-xl:leading-[24px] list-disc [&>li]:mt-2 ml-8`,
  ordered: `font-normal ${graphikStdClassName} text-[18px] leading-[24px] -tracking-1 desktop:text-[24px] desktop:leading-[26px] desktop-xl:text-[21px] desktop-xl:leading-[28px] list-decimal [&>li]:mt-2 ml-8`
};

export function List({ className, variant = 'unordered', tag = 'ul', children, ...props }: ListProps) {
  const variantClass = variant ? LIST_VARIANTS[variant] : '';
  const Element = tag;
  return (
    <Element className={cn(variantClass, className)} {...props}>
      {children}
    </Element>
  );
}
