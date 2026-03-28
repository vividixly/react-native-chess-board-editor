import type { PlayerSet } from '../../types/playerSet.types';

export const chess: PlayerSet = {
  players: ['w', 'b'] as const,
  name: 'chess' as const,
};
