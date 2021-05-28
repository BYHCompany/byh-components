import styled from 'styled-components';
import { StyledCheckboxProps } from './checkboxType';
import { IoMdCheckmark } from 'react-icons/io';

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
export const Icon = styled(IoMdCheckmark)``;

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  background-color: ${(props) => (props.checked ? '#072832' : '#fff')};
  border-radius: 3px;
  border: 2px solid #072832;
  transition: all 250ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    color: ${(props) => (props.checked ? '#fff' : '#072832')};
    height: ${({ height }) => `${height}px`};
    width: ${({ width }) => `${width}px`};
  }
`;
