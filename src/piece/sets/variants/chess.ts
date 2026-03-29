import type { PieceSet } from '../../types/pieceSet.types';
import { assetToUri } from '../../../utils/assetToUri';

export const chess: PieceSet = {
  pieces: [
    {
      player: 'w',
      type: 'p',
      uri: assetToUri(require('../../../../assets/pieces/chess/w/p.svg'))!,
    },
    {
      player: 'w',
      type: 'n',
      uri: assetToUri(require('../../../../assets/pieces/chess/w/n.svg'))!,
    },
    {
      player: 'w',
      type: 'b',
      uri: assetToUri(require('../../../../assets/pieces/chess/w/b.svg'))!,
    },
    {
      player: 'w',
      type: 'r',
      uri: assetToUri(require('../../../../assets/pieces/chess/w/r.svg'))!,
    },
    {
      player: 'w',
      type: 'q',
      uri: assetToUri(require('../../../../assets/pieces/chess/w/q.svg'))!,
    },
    {
      player: 'w',
      type: 'k',
      uri: assetToUri(require('../../../../assets/pieces/chess/w/k.svg'))!,
    },
    {
      player: 'b',
      type: 'p',
      uri: assetToUri(require('../../../../assets/pieces/chess/b/p.svg'))!,
    },
    {
      player: 'b',
      type: 'n',
      uri: assetToUri(require('../../../../assets/pieces/chess/b/n.svg'))!,
    },
    {
      player: 'b',
      type: 'b',
      uri: assetToUri(require('../../../../assets/pieces/chess/b/b.svg'))!,
    },
    {
      player: 'b',
      type: 'r',
      uri: assetToUri(require('../../../../assets/pieces/chess/b/r.svg'))!,
    },
    {
      player: 'b',
      type: 'q',
      uri: assetToUri(require('../../../../assets/pieces/chess/b/q.svg'))!,
    },
    {
      player: 'b',
      type: 'k',
      uri: assetToUri(require('../../../../assets/pieces/chess/b/k.svg'))!,
    },
  ] as const,
  name: 'chess' as const,
};
