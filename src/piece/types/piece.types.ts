import type { Player } from '../../player/types/player.types';

export interface Piece {
  type: string;
  player: Player;
  uri: string;
}
