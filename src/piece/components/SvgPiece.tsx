import { StyleSheet, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

interface SvgPieceProps {
  size: number;
  uri: string;
}

export default function SvgPiece({ size, uri }: SvgPieceProps) {
  return (
    <View style={[{ width: size, height: size }, styles.container]}>
      <SvgUri width={size} height={size} uri={uri} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
