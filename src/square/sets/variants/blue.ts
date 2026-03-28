import type { SquareSet } from '../../types/squareSet.types';

export const blue: SquareSet = {
  squares: {
    light: '#dee3e6' as const,
    dark: '#8ca2ad' as const,
  } as const,
  name: 'blue' as const,
};
