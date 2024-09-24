import { ChevronRight, Plus } from '@/app/components/icons';
import {
  FAQMarkdownRenderer,
  FAQSearchResultMarkdownRenderer
} from '@/app/components/markdown/FAQMarkdownRenderer';
import { Heading, Text } from '@/app/components/Typography';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';

export default function SearchResult({
  item,
  showPreview,
  onCategorySelected,
  isLast
}: {
  showPreview: boolean;
  item: {
    question: string;
    answer: string;
    categories: string[];
  };
  isLast: boolean;
  onCategorySelected: (category: string) => void;
}) {
  return (
    <AccordionItem key={item.question} value={item.question} className={isLast ? 'mb-10' : ''}>
      <AccordionTrigger
        icon={Plus}
        rotation={45}
        className="py-0"
        iconClassName="self-start mt-[20px] tablet:mt-[27px] desktop:mt-[38px] desktop-xl:mt-11"
      >
        <div className="flex flex-col items-start py-5 desktop:py-8 desktop-xl:py-9">
          <Heading tag="h5" className="pr-4 text-left">
            {item.question}
          </Heading>
          {showPreview && (
            <div>
              {/* TODO: This should be the preview showing the match highlighted, not just the start of the answer*/}
              <div className="mt-4 line-clamp-1 text-left text-gray-400">
                <FAQSearchResultMarkdownRenderer markdown={item.answer} />
              </div>
              <div className="mb-6 mt-8 flex justify-start text-left">
                {item.categories.map(cat => (
                  <span
                    onClick={e => {
                      onCategorySelected(cat);
                      e.stopPropagation();
                    }}
                    key={cat}
                  >
                    <Text
                      tag="span"
                      variant="ui-medium"
                      key={cat}
                      className="mr-4 flex flex-row items-center gap-2 rounded-xl border p-3 hover:border-black"
                    >
                      {cat}
                      <ChevronRight />
                    </Text>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="mb-4 mt-4">
          <FAQMarkdownRenderer markdown={item.answer} />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
