import React, { useState, useCallback, useMemo } from 'react';
import type { SquareSet } from '../types/squareSet.types';
import type { Square } from '../types/square.types';
import SvgSquare from '../components/SvgSquare';

type SvgSquareMap = Record<Square['type'], React.ReactElement>;

export const useSquareSet = (
  initialSquareSet: SquareSet,
  initialSquareSize: number
) => {
  const [squareSet, setSquareSet] = useState<SquareSet>(initialSquareSet);
  const [squareSize, setSquareSize] = useState<number>(initialSquareSize);

  const svgSquareMap = useMemo<SvgSquareMap>(() => {
    const map: SvgSquareMap = {};

    for (const [type, color] of Object.entries(squareSet.squares)) {
      map[type] = (
        <SvgSquare
          key={`${squareSet.name}-${type}`}
          size={squareSize}
          color={color}
        />
      );
    }

    return map;
  }, [squareSet, squareSize]);

  const getSvgSquare = useCallback(
    (type: Square['type']) => {
      return svgSquareMap[type];
    },
    [svgSquareMap]
  );

  const getAllSvgSquares = useCallback(() => {
    return Object.values(svgSquareMap);
  }, [svgSquareMap]);

  return {
    squareSet,
    setSquareSet,

    squareSize,
    setSquareSize,

    getSvgSquare,
    getAllSvgSquares,
  };
};
