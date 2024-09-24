import { Search } from '@/app/components/icons/Search';
import { Text } from '@/app/components/Typography';

export default function SearchHistory({
  terms,
  setSearchTerm
}: {
  terms: string[];
  setSearchTerm: (term: string) => void;
}) {
  return (
    <div className="flex flex-col gap-4 overflow-x-hidden">
      {terms.map(term => (
        <button
          className="flex w-fit items-center gap-2 text-highlightLightBG"
          key={term}
          onClick={() => setSearchTerm(term)}
        >
          <Search className="flex-shrink-0" />
          <Text tag="span" className="line-clamp-1 text-left">
            {term}
          </Text>
        </button>
      ))}
    </div>
  );
}
