import styled from 'styled-components';
import { TogglerBackgroundTypes, TogglerSwitcherTypes } from './TogglerTypes';

export const TogglerWrapper = styled.div`
  display: flex;
  width: 80px;
  height: 44px;
`;

export const TogglerBackground = styled.label<TogglerBackgroundTypes>`
  border-radius: 50px;
  background-color: ${({ isChecked }) => (isChecked ? '#072832' : '#ffffff')};
  width: 100%;
  height: 100%;
  padding: 4px;
  transition: all 0.2s ease-in-out;
`;

export const TogglerSwitcher = styled.div<TogglerSwitcherTypes>`
  animation-fill-mode: forwards;
  height: 36px;
  width: 36px;
  border-radius: 50px;
  background-color: ${({ isChecked }) => (isChecked ? `#ffffff` : `#072832`)};
  transition: all 0.2s ease-in-out;
`;
