import React from 'react';
import { List } from '../List/List';
import { ListContent } from '../List/listType';
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
  customBgColor,
  display,
  ...props
}) => {
  const [clicked, setClicked] = React.useState<number>();
  return (
    <>
      <PaperWrapper
        {...props}
        display={display}
        customBgColor={customBgColor}
        data-testid="paper"
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        height={height}
        width={width}
        boxShadow={boxShadow}
        borderRadius={borderRadius}>
        {children}
      </PaperWrapper>
    </>
  );
};
