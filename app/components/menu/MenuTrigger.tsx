import { useState } from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import { ChevronDown } from '@/app/components/icons';
import { Text } from '../Typography';
import { Tone } from '@/app/context/AppContext';

export const MenuTrigger = ({
  title,
  isSelected,
  isOpen,
  onHover,
  onClick,
  tone
}: {
  title: string;
  isSelected: boolean;
  isOpen: boolean;
  tone: Tone;
  onHover?: () => void;
  onClick: () => void;
}) => {
  const textColor =
    isOpen && isSelected ? 'text-white' : isOpen ? 'text-gray-500' : tone === 'dark' ? 'text-white' : '';

  const [isTriggerHovered, setIsTriggerHovered] = useState(false);
  return (
    <LayoutGroup id={title}>
      <div
        onMouseEnter={() => {
          if (onHover) onHover();
          setIsTriggerHovered(true);
        }}
        onMouseLeave={() => {
          setIsTriggerHovered(false);
        }}
        onClick={onClick}
        className={`flex-column ml-8 flex cursor-pointer items-center space-x-2 py-4 ${textColor}`}
      >
        <div id="group" className="relative flex items-center">
          <Text variant="ui-small" className={textColor}>
            {title}
          </Text>
          <ChevronDown
            className={`ml-1 h-3 w-3 transition duration-200 ${isSelected ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
          {(!isOpen || !isSelected) && isTriggerHovered && (
            <motion.div
              layoutId="underline"
              className={`absolute -bottom-2 mt-1 h-[1px] w-full ${
                isOpen ? 'bg-white' : tone === 'dark' ? 'bg-white' : 'bg-black'
              }`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
            />
          )}
        </div>
      </div>
    </LayoutGroup>
  );
};
