import styled from 'styled-components';
import { AlertTextWrapperProps, AlertWrapperProps } from './AlertTypes';

export const AlertWrapper = styled.div<AlertWrapperProps>`
  display: flex;
  max-width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  justify-content: center;
  align-items: center;
  background-color: ${({ variant }) =>
    (variant === 'success' && '#4FFFAA') ||
    (variant === 'warning' && '#FCFF71') ||
    (variant === 'danger' && '#EB001B')};
  padding: ${({ padding }) => `${padding}px`};
  color: ${({ variant }) =>
    (variant === 'success' && '#000000') ||
    (variant === 'warning' && '#000000') ||
    (variant === 'danger' && '#ffffff')};
  border-radius: 3px;
`;

export const AlertTextWrapper = styled.div<AlertTextWrapperProps>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;

  & svg {
    font-size: ${({ fontSize }) => `${fontSize * 1.5}px`};
  }
`;
