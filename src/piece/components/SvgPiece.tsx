import { SvgUri } from 'react-native-svg';

interface SvgPieceProps {
  size: number;
  uri: string;
}

export default function SvgPiece({ size, uri }: SvgPieceProps) {
  return <SvgUri width={size} height={size} uri={uri} />;
}
