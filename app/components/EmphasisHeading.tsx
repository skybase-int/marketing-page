import { cn } from '../lib/utils';
import { Heading, HeadingElement } from './Typography';

export const EmphasisHeading = ({
  text,
  emphasisText,
  afterText,
  textClassName,
  emphasisClassName,
  tag = 'h1',
  reverse = false
}: {
  text: string;
  emphasisText: string;
  afterText?: string;
  textClassName?: string;
  emphasisClassName?: string;
  tag?: HeadingElement;
  reverse?: boolean;
}) => {
  return (
    <Heading tag={tag} className={textClassName}>
      {reverse ? (
        <>
          <span className={cn('text-highlightLightBG', emphasisClassName)}>{emphasisText}</span> {text}
        </>
      ) : (
        <>
          {text} <span className={cn('text-highlightLightBG', emphasisClassName)}>{emphasisText}</span>{' '}
          {afterText}
        </>
      )}
    </Heading>
  );
};
