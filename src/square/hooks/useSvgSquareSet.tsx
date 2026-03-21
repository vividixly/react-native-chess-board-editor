import { useCallback } from 'react';
import { type SquareSet } from '../types/squareSet.types';
import { type Square } from '../types/square.types';
import SvgSquare from '../components/SvgSquare';

interface UseSvgSquareSetOptions {
  size: number;
}

export function useSvgSquareSet(
  squareSet: SquareSet,
  { size }: UseSvgSquareSetOptions
) {
  const getSvgSquare = useCallback(
    (type: Square['type']) => {
      const square: Square | undefined = squareSet.squares.find(
        (s) => s.type == type
      );
      if (!square) return null;
      return <SvgSquare size={size} color={square.color} />;
    },
    [squareSet, size]
  );

  return {
    getSvgSquare,
  };
}
