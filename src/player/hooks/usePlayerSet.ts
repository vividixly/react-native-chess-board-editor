import { useState } from 'react';
import type { PlayerSet } from '../types/playerSet.types';

export const usePlayerSet = (initialPlayerSet: PlayerSet) => {
  const [playerSet, setPlayerSet] = useState<PlayerSet>(initialPlayerSet);

  return {
    playerSet,
    setPlayerSet,
  };
};
