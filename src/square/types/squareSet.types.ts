import type { Square } from '../types/square.types';

export interface SquareSet {
  squares: Record<Square['type'], Square['color']>;
  name: string;
}
