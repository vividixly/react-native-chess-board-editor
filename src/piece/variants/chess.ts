import type { PieceSet } from '../types/pieceSet.types';
import { assetToUri } from '../../utils/assetToUri';

export const chess: PieceSet = {
  pieces: {
    w: {
      p: assetToUri(require('../../../assets/pieces/chess/w/p.svg'))!,
      n: assetToUri(require('../../../assets/pieces/chess/w/n.svg'))!,
      b: assetToUri(require('../../../assets/pieces/chess/w/b.svg'))!,
      r: assetToUri(require('../../../assets/pieces/chess/w/r.svg'))!,
      q: assetToUri(require('../../../assets/pieces/chess/w/q.svg'))!,
      k: assetToUri(require('../../../assets/pieces/chess/w/k.svg'))!,
    },
    b: {
      p: assetToUri(require('../../../assets/pieces/chess/b/p.svg'))!,
      n: assetToUri(require('../../../assets/pieces/chess/b/n.svg'))!,
      b: assetToUri(require('../../../assets/pieces/chess/b/b.svg'))!,
      r: assetToUri(require('../../../assets/pieces/chess/b/r.svg'))!,
      q: assetToUri(require('../../../assets/pieces/chess/b/q.svg'))!,
      k: assetToUri(require('../../../assets/pieces/chess/b/k.svg'))!,
    },
  },
  name: 'chess',
};
