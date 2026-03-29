import type { SquareSet } from '../../types/squareSet.types';

export const classic: SquareSet = {
  squares: [
    { type: 'light', color: '#f0d9b5' } as const,
    { type: 'dark', color: '#b58863' } as const,
  ] as const,
  name: 'classic' as const,
};
