import styled from 'styled-components';
import { IconWrapperProps, InputAreaProps, InputContentProps, InputFieldProps } from './inputTypes';

//TODO:
//1. Do hover effect for input

export const InputArea = styled.div<InputAreaProps>`
  width: ${({ width, fullwidth }) => (fullwidth ? '100%' : `${width}px`)};
  height: ${({ height }) => `${height}px`};
  opacity: ${({ opacity }) => opacity};
  background-color: ${({ variant }) =>
    (variant === 'primary' && '#EBEBEB') ||
    (variant === 'secondary' && 'rgba(255, 255, 255, 0.5)') ||
    (variant === 'default' && '#EBEBEB')};
  display: flex;
  align-items: center;
  border-radius: 3px;
`;

export const InputField = styled.input<InputFieldProps>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  color: #000;

  &::placeholder {
    opacity: 1;
    color: #8c8c8c;
  }
`;

export const InputContent = styled.div<InputContentProps>`
  display: flex;
  align-items: center;
  padding: ${({ paddingsHorizontal }) => `0 ${paddingsHorizontal}px`};
  width: 100%;
`;

export const IconWrapper = styled.div<IconWrapperProps>`
  height: ${({ height }) => `${height}px`};
  background-color: ${({ isIconWrapperTransparent }) =>
    !isIconWrapperTransparent ? '#072832' : 'transparent'};
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  width: ${({ height }) => `${height}px`};
  border-radius: ${({ isOnStart }) => (isOnStart ? `3px 0 0 3px` : '0 3px 3px 0')};
  flex-shrink: 0;
`;
