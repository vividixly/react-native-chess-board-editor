import React, { useState, useCallback, useMemo } from 'react';
import type { PieceSet } from '../types/pieceSet.types';
import type { Piece } from '../types/piece.types';
import SvgPiece from '../components/SvgPiece';

type SvgPieceMap = Record<
  Piece['player'],
  Record<Piece['type'], React.ReactElement>
>;

export const usePieceSet = (
  initialPieceSet: PieceSet,
  initialPieceSize: number
) => {
  const [pieceSet, setPieceSet] = useState<PieceSet>(initialPieceSet);
  const [pieceSize, setPieceSize] = useState<number>(initialPieceSize);

  const svgPieceMap = useMemo<SvgPieceMap>(() => {
    const map: SvgPieceMap = {};

    for (const [player, pieces] of Object.entries(pieceSet.pieces)) {
      map[player] = {};
      for (const [type, uri] of Object.entries(pieces)) {
        map[player][type] = (
          <SvgPiece
            key={`${pieceSet.name}-${player}-${type}`}
            size={pieceSize}
            uri={uri}
          />
        );
      }
    }

    return map;
  }, [pieceSet, pieceSize]);

  const getSvgPiece = useCallback(
    (piece: Piece) => {
      return svgPieceMap[piece.player]?.[piece.type];
    },
    [svgPieceMap]
  );

  const getAllSvgPieces = useCallback(() => {
    return Object.values(svgPieceMap).flatMap((playerPieces) =>
      Object.values(playerPieces)
    );
  }, [svgPieceMap]);

  const getSvgPiecesByPlayer = useCallback(
    (player: Piece['player']) => {
      const playerPieces = svgPieceMap[player];
      if (!playerPieces) return [];
      return Object.values(playerPieces);
    },
    [svgPieceMap]
  );

  const getSvgPiecesByType = useCallback(
    (type: Piece['type']) => {
      return Object.values(svgPieceMap).flatMap((playerPieces) => {
        const piece = playerPieces[type];
        return piece ? [piece] : [];
      });
    },
    [svgPieceMap]
  );

  return {
    pieceSet,
    setPieceSet,

    pieceSize,
    setPieceSize,

    getSvgPiece,
    getAllSvgPieces,
    getSvgPiecesByPlayer,
    getSvgPiecesByType,
  };
};
