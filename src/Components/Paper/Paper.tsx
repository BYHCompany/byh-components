import React from 'react';
import { PaperWrapper } from './PaperElement';
import { PaperProps } from './paperType';

export const Paper: React.FC<PaperProps> = ({
  maxHeight,
  maxWidth,
  height,
  width,
  children,
  boxShadow = true,
  borderRadius = '3px',
}) => {
  return (
    <PaperWrapper
      data-testid="paper"
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      height={height}
      width={width}
      boxShadow={boxShadow}
      borderRadius={borderRadius}>
      {children}
    </PaperWrapper>
  );
};
