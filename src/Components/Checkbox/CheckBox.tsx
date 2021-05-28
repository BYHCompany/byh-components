import { logDOM } from '@testing-library/dom';
import React from 'react';
import { CheckboxContainer, HiddenCheckbox, Icon, StyledCheckbox } from './CheckBoxElement';
import { CheckBoxProps } from './checkboxType';

export const CheckBox: React.FC<CheckBoxProps> = ({ callback, height, width }) => {
  const [checked, setChecked] = React.useState<boolean>(false);

  const onChangeHandler = () => {
    setChecked(!checked);
  };

  callback && callback(checked);

  return (
    <div>
      <label>
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
    </div>
  );
};
