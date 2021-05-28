import styled from 'styled-components';
import { PaperWrapperProps } from './paperType';

export const PaperWrapper = styled.div<PaperWrapperProps>`
  height: ${({ height, maxHeight }) => (maxHeight && '100%') || (height ? `${height}px` : '100%')};
  width: ${({ width, maxWidth }) => (maxWidth && '100%') || (width ? `${width}px` : '100%')};
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : null)};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : null)};
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  box-shadow: ${({ boxShadow }) => (boxShadow ? '0px 4px 30px 0px rgba(0, 0, 0, 0.25)' : null)};
  background: #ebebeb;
`;
