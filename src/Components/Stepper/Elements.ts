import styled from 'styled-components';
import { StepperWrapperProps } from './StepperTypes';

export const StepperWrapper = styled.div<StepperWrapperProps>`
  display: flex;
  width: 100%;
  max-width: ${({ maxWidth, fullWidth }) => (fullWidth ? '100%' : `${maxWidth}px`)};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
