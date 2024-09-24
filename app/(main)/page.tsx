import { LandingContent } from '@/app/(main)/components/LandingContent';
import { fetchData } from './fetchData';

export default async function Home() {
  const data = await fetchData();

  return <LandingContent data={data} />;
}
