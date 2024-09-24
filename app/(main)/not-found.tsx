import Image from 'next/image';
import BackgroundNotFound from '@/public/404_background.png';
import Link from 'next/link';
import { Heading, Text } from '@/app/components/Typography';
import { ButtonArrow } from '@/app/components/ui/button';

type ErrorDetailsProps = {
  title?: string;
  description?: string | React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
  showButton?: boolean;
};

const ErrorDetails = ({
  title,
  description,
  buttonText,
  buttonLink,
  showButton = true
}: ErrorDetailsProps) => {
  return (
    <div className="relative flex flex-col items-center text-center">
      <Heading tag="h1" className="text-[38px] font-normal sm:mt-4 sm:text-[50px] lg:text-[64px]">
        {title || 'Lost in the Sky?'}
      </Heading>
      <Text className="mb-2 mt-3 font-normal sm:w-[450px] sm:text-lg md:mt-5 lg:text-xl">
        {description || "Seems like you've ventured into the unknown. Click the button to find your way back"}
      </Text>
      {showButton && (
        <Link href={buttonLink || '/'} className="mt-10 lg:mt-14">
          <ButtonArrow variant="nocturnal-2" className="h-[72px] w-[220px]">
            {buttonText || 'Homepage'}
          </ButtonArrow>
        </Link>
      )}
    </div>
  );
};

export default function NotFound() {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center gap-3 p-10 text-center text-white">
      <Image
        alt="Dark space sky background"
        src={BackgroundNotFound}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <Heading tag="h4" className="relative text-[22px] font-normal sm:text-2xl lg:text-2xl">
        Page not found
      </Heading>
      <ErrorDetails />
    </div>
  );
}
