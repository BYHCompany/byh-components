import styled, { css, keyframes } from 'styled-components';
import {
  TogglerBackgroundTypes,
  TogglerSwitcherTypes,
  TogglerSwitcherWrapperTypes,
} from './TogglerTypes';

export const moveRight = (x: number) => keyframes`
  0% {
    transform: none;
  }
  100% {
    transform: translateX(${x}px);
  }
`;

export const moveLeft = (x: number) => keyframes`
  0% {
    transform: translateX(${x}px);
  }
  100% {
    transform: none;
  }
`;

export const translateRight = (x: number) => css`
  animation: ${moveRight(x)} 0.3s ease-in-out 1;
  animation-fill-mode: forwards;
`;

export const translateLeft = (x: number) => css`
  animation: ${moveLeft(x)} 0.3s ease-in-out 1;
  animation-fill-mode: forwards;
`;

export const TogglerWrapper = styled.div<TogglerSwitcherWrapperTypes>`
  display: flex;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  align-items: center;
`;

export const TogglerBackground = styled.label<TogglerBackgroundTypes>`
  border-radius: 50px;
  background-color: ${({ isChecked }) => (isChecked ? '#072832' : '#ffffff')};
  width: 100%;
  height: 100%;
  padding: ${({ padding }) => `${padding}px`};
  transition: all 0.2s ease-in-out;
`;

export const TogglerSwitcher = styled.div<TogglerSwitcherTypes>`
  animation-fill-mode: forwards;
  height: ${({ heightAndWidth }) => `${heightAndWidth}px`};
  width: ${({ heightAndWidth }) => `${heightAndWidth}px`};
  border-radius: 50px;
  background-color: ${({ isChecked }) => (isChecked ? `#ffffff` : `#072832`)};
  transition: all 0.2s ease-in-out;
  ${({ move, distance }) =>
    (move === 'ŗight' && translateRight(distance)) || (move === 'left' && translateLeft(distance))}
`;
