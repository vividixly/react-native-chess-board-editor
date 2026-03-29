import type { Vector2D } from '../../types/vector.types';

export const createArray = <T>(size: Vector2D, defaultValue: T): T[][] => {
  return Array(size.y)
    .fill(null)
    .map(() => Array(size.x).fill(defaultValue));
};
