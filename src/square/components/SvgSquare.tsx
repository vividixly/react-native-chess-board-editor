import type { ReactElement } from 'react';
import { StyleSheet, View, type ColorValue } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

interface SvgSquareProps {
  size: number;
  color: ColorValue;
  children?: ReactElement;
}

export default function SvgSquare({ size, color, children }: SvgSquareProps) {
  return (
    <View style={{ width: size, height: size, ...styles.container }}>
      <Svg width={size} height={size} style={StyleSheet.absoluteFill}>
        <Rect width={size} height={size} fill={color} />
      </Svg>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
