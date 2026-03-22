import { useState, useCallback } from 'react';
import type { SquareSet } from '../types/squareSet.types';
import type { Square } from '../types/square.types';
import SvgSquare from '../components/SvgSquare';

export const useSquareSet = (initialSquareSet: SquareSet) => {
  const [squareSet, setSquareSet] = useState<SquareSet>(initialSquareSet);

  const getSvgSquare = useCallback(
    (type: Square['type'], size: number) => {
      const squareColor: Square['color'] | undefined = squareSet.squares[type];
      if (!squareColor) return null;
      return <SvgSquare size={size} color={squareColor} />;
    },
    [squareSet]
  );

  return {
    squareSet,
    setSquareSet,
    getSvgSquare,
  };
};
