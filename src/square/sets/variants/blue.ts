import type { SquareSet } from '../../types/squareSet.types';

export const blue: SquareSet = {
  squares: [
    { type: 'light', color: '#dee3e6' } as const,
    { type: 'dark', color: '#8ca2ad' } as const,
  ] as const,
  name: 'blue' as const,
};
