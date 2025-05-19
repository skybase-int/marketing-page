import { useState, useEffect } from 'react';

export const useRandomL2Name = (): string | undefined => {
  const [randomL2Name, setRandomL2Name] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Generate the random name only once on the client after mount
    setRandomL2Name(Math.random() > 0.5 ? 'base' : 'arbitrum one');
  }, []);

  return randomL2Name;
};
