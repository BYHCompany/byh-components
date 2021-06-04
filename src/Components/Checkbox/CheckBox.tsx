import React from 'react';
import { CheckboxContainer, HiddenCheckbox, Icon, StyledCheckbox } from './CheckBoxElement';
import { CheckBoxProps } from './checkboxType';

export const CheckBox: React.FC<CheckBoxProps> = ({
  height = 24,
  width = 24,
  onChangeHandler,
  checked,
  ...props
}) => {
  return (
    <label {...props}>
      <CheckboxContainer data-testid="checkbox">
        <HiddenCheckbox onChange={onChangeHandler} checked={checked} />
        <StyledCheckbox
          data-testid="styled-checkbox"
          height={height}
          width={width}
          checked={checked}>
          <Icon data-testid="icon" />
        </StyledCheckbox>
      </CheckboxContainer>
    </label>
  );
};
