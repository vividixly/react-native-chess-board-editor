import type { ColorValue } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

interface SvgSquareProps {
  size: number;
  color: ColorValue;
}

export default function SvgSquare({ size, color }: SvgSquareProps) {
  return (
    <Svg width={size} height={size}>
      <Rect width={size} height={size} fill={color} />
    </Svg>
  );
}
