import type { Piece } from './piece.types';

export interface PieceSet {
  pieces: Record<Piece['player'], Record<Piece['type'], Piece['uri']>>;
  name: string;
}
