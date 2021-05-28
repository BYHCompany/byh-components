import styled from 'styled-components';
import { PhotoWrapperProp } from './imageType';

export const ImageDiv = styled.div<PhotoWrapperProp>`
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  background-position: center;
  background-size: cover;
  border-radius: 3px;
  background-image: ${({ src }) => `url(${src})`};
`;
