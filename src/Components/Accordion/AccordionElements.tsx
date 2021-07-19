import styled from 'styled-components';
import { AccordionButtonProps } from './accordionTypes';

export const AccordionButton = styled.button<AccordionButtonProps>`
  background-color: #e9e9e9;
  border: none;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.25);
  z-index: 1;
  width: ${({ width }) => width && `${width}px`};
  border-radius: ${({ isOpen }) => (isOpen ? '3px 3px 0 0' : '3px')};
  height: 45px;
`;

export const ButtonContentWrapper = styled.div`
  display: flex;
  max-width: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
