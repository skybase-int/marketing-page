import Fuse from 'fuse.js';
import { faqDataset } from '../faqData/faqData';
import { useMemo } from 'react';

const unrankedFaqItems = faqDataset.map(item => ({ item, score: 0, matches: [] }));

export const useSearchFaq = ({
  searchTerm,
  category,
  page = 1,
  pageSize = 10
}: {
  searchTerm?: string;
  category?: string;
  page?: number;
  pageSize?: number;
}) => {
  const fuse = useMemo(
    () =>
      new Fuse(faqDataset, {
        keys: category ? ['categories'] : searchTerm?.length ? ['question', 'answer'] : [],
        ignoreLocation: !category,
        threshold: category ? 0 : 0.3,
        includeMatches: true,
        includeScore: true,
        fieldNormWeight: 0.4
      }),
    [category, searchTerm]
  );

  const results = useMemo(() => {
    if (searchTerm) return fuse.search(searchTerm);
    if (category) return fuse.search(category);
    return unrankedFaqItems;
  }, [fuse, searchTerm, category]);

  // Separate exact matches (score <= 0.1) from other matches
  const exactMatches = results.filter(result => result.score !== undefined && result.score <= 0.1);

  const exactTotalItems = exactMatches.length;

  // Combined pagination logic - prioritize exact matches, then fill with other matches
  const totalCount = results.length;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Get the page slice from the combined results
  const paginatedResults = results.slice(startIndex, endIndex);

  // Now separate the paginated results into exact and other
  const paginatedExactMatches = paginatedResults.filter(
    result => result.score !== undefined && result.score <= 0.1
  );
  const paginatedOtherMatches = paginatedResults.filter(
    result => result.score === undefined || result.score > 0.1
  );

  return {
    items: paginatedResults,
    exactItems: paginatedExactMatches,
    otherItems: paginatedOtherMatches,
    totalCount,
    exactCount: exactTotalItems
  };
};
