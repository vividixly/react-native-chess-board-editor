import type { SquareSet } from '../../types/squareSet.types';

export const classic: SquareSet = {
  squares: {
    light: '#f0d9b5' as const,
    dark: '#b58863' as const,
  } as const,
  name: 'classic' as const,
};
