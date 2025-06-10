import { useState, useEffect } from 'react';

export const useRandomL2Name = (): string | undefined => {
  const [randomL2Name, setRandomL2Name] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Generate the random name only once on the client after mount
    const l2Names = ['base', 'arbitrum one', 'op mainnet', 'unichain'];
    const randomIndex = Math.floor(Math.random() * l2Names.length);
    setRandomL2Name(l2Names[randomIndex]);
  }, []);

  return randomL2Name;
};
