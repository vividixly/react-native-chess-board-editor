import type { SquareProps } from '../types/square.types';
import Svg, { Rect } from 'react-native-svg';

export default function Square({ size, color }: SquareProps) {
  return (
    <Svg width={size} height={size}>
      <Rect width={size} height={size} fill={color} />
    </Svg>
  );
}
