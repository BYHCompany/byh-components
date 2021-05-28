import React from 'react';
import { ImageDiv } from './ImageElements';
import { PhotoProps } from './imageType';

export const ImageComponent: React.FC<PhotoProps> = ({ src, height = 300, width = 300 }) => {
  return <ImageDiv data-testid="imgDiv" height={height} width={width} src={src} />;
};
