import type { SvgSquareProps } from '../types/svgSquare.types';
import Svg, { Rect } from 'react-native-svg';

export default function SvgSquare({ size, color }: SvgSquareProps) {
  return (
    <Svg width={size} height={size}>
      <Rect width={size} height={size} fill={color} />
    </Svg>
  );
}
