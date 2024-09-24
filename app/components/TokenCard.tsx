import Image, { StaticImageData } from 'next/image';
import { Text } from './Typography';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

export const TokenCard = ({
  title,
  description,
  token,
  alt,
  content,
  footer
}: {
  title: string;
  description: string;
  token: StaticImageData;
  alt: string;
  content: React.ReactElement;
  footer: React.ReactElement;
}) => {
  return (
    <Card className="bg-stained-stroke group w-full rounded-[16px] p-0.5">
      <div className="relative h-full w-full rounded-[14px] bg-white px-4 pb-8 pt-5 desktop:p-7 desktop:pb-8 desktop-xl:p-10 desktop-xl:pb-11">
        <CardHeader className="mb-4 flex-col space-y-1 desktop:mb-3 desktop-xl:mb-11">
          <Text variant="p3-medium">{title}</Text>
          <Text variant="p3" className="text-black/80">
            {description}
          </Text>
        </CardHeader>
        <CardContent className="mb-6 p-0 desktop-xl:mb-8">
          <div className="flex w-full flex-col items-center gap-11 tablet:gap-5 desktop:gap-8 desktop-xl:gap-[60px]">
            <Image
              src={token}
              alt={alt + '-token-logo'}
              className="w-[118px] opacity-100 transition-transform group-hover:scale-x-90 tablet:w-[147px] desktop:w-[258px] desktop:opacity-0 desktop-xl:w-[344px]"
            />
            <div className="w-full">{content}</div>
          </div>
        </CardContent>
        <CardFooter className="sticky top-full p-0">
          <div className="flex gap-7">{footer}</div>
        </CardFooter>
      </div>
    </Card>
  );
};
