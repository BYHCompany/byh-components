import styled from 'styled-components';
import { ButtonWrapperProps } from './buttonGroupType';

export const ButtonGroupWrapper = styled.div<ButtonWrapperProps>`
  max-width: ${({ width }) => `${width}px`};
  width: 100%;
  max-height: ${({ height }) => `${height}px`};
  height: 100%;
  display: flex;
`;
