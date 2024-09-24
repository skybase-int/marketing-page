import { useEffect, useRef, useState } from 'react';
import { Close, Search } from '@/app/components/icons';
import { Text } from '@/app/components/Typography';
import { TabButton } from '@/app/components/ui/button';
import { BP, useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';
import { motion } from 'framer-motion';

const sanitizeInput = (input: string) => {
  const sanitized = input.replace(/[^a-zA-Z0-9 ]/g, ''); // remove non-alphanumeric characters
  return sanitized.slice(0, 100);
};

export default function SearchHeader({
  category,
  categories,
  isSearchFocused,
  searchTerm,
  onCategoryClick,
  onSearchChange,
  onInputFocus,
  onCloseClick,
  onClearClick
}: {
  category: string;
  categories: string[];
  isSearchFocused: boolean;
  searchTerm: string;
  onCategoryClick: (category: string) => void;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputFocus: () => void;
  onCloseClick: () => void;
  onClearClick: () => void;
}) {
  const { bpi } = useBreakpointIndex();
  const inputRef = useRef<HTMLInputElement>(null);

  const isMobile = bpi < BP.md;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowLeftGradient(scrollLeft > 0);
        setShowRightGradient(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className={`mb-11 flex flex-row-reverse items-center justify-between gap-2 tablet:flex-row`}>
      <div className="relative flex items-center gap-2 overflow-x-auto">
        {showLeftGradient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[150px] bg-gradient-to-r from-white to-transparent"
          />
        )}
        {showRightGradient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[150px] bg-gradient-to-l from-white to-transparent"
          />
        )}
        <div ref={scrollContainerRef} className="flex items-center gap-2 overflow-x-auto">
          {!isSearchFocused &&
            categories.map(cat => (
              <TabButton
                key={cat}
                onClick={() => onCategoryClick(cat)}
                className={`max-h-[56px] ${
                  cat === category && !isSearchFocused ? 'border-black' : 'border-black/30'
                }`}
              >
                {cat}
              </TabButton>
            ))}
        </div>
      </div>
      <div
        className={`relative flex ${isMobile ? 'flex-col flex-col-reverse' : ''} ${
          isSearchFocused ? 'w-full' : 'w-14'
        } items-center`}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder={isSearchFocused ? 'Search' : undefined}
          value={searchTerm}
          onChange={e =>
            onSearchChange({ ...e, target: { ...e.target, value: sanitizeInput(e.target.value) } })
          }
          onFocus={onInputFocus}
          className={`h-14 rounded-[16px] bg-black/5 px-4 py-2 ${
            isSearchFocused ? (isMobile ? 'w-full' : 'flex-grow') : 'w-14 cursor-pointer'
          }`}
        />
        {isSearchFocused && searchTerm.length ? (
          <button
            onClick={() => {
              onClearClick();
              inputRef.current?.focus();
            }}
            className={`absolute top-1/2 -translate-y-1/2 text-gray-400 ${
              isSearchFocused ? (isMobile ? 'right-[22px] mt-[20px]' : 'right-[102px]') : 'right-[22px]'
            }`}
          >
            <Close />
          </button>
        ) : (
          <Search
            className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-gray-400 ${
              isSearchFocused ? (isMobile ? 'right-[22px] mt-[20px]' : 'right-[102px]') : 'right-[22px]'
            }`}
          />
        )}

        {isSearchFocused && (
          <button
            onClick={onCloseClick}
            className={`ml-2 h-[42px] whitespace-nowrap rounded-full px-4 py-2 text-black/50 ${
              isMobile ? 'mx-2 self-end px-0' : ''
            }`}
          >
            <Text variant="ui-small-regular">Close</Text>
          </button>
        )}
      </div>
    </div>
  );
}
