import type { Vector2D } from '../types/vector.types';

export const isValidBounds2D = (v1: Vector2D, v2: Vector2D): boolean => {
  return v1.y >= 0 && v1.y < v2.y && v1.x >= 0 && v1.x < v2.x;
};
