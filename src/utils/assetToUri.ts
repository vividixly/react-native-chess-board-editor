import {
  Image,
  type ImageResolvedAssetSource,
  type ImageSourcePropType,
} from 'react-native';

export const assetToUri = (source: ImageSourcePropType): string | null => {
  if (typeof source === 'number') {
    const resolved: ImageResolvedAssetSource | undefined =
      Image.resolveAssetSource(source);
    return resolved?.uri || null;
  }

  if (
    source &&
    typeof source === 'object' &&
    'uri' in source &&
    typeof source.uri === 'string'
  ) {
    return source.uri;
  }

  return null;
};
