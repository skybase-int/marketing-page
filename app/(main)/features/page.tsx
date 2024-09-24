import { FeaturesContent } from './components/FeaturesContent';
import { fetchData } from '../fetchData';

export default async function Home() {
  const data = await fetchData();
  return <FeaturesContent data={data} />;
}
