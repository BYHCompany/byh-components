import React, { useEffect } from 'react';
import { CheckboxContainer, HiddenCheckbox, Icon, StyledCheckbox } from './CheckBoxElement';
import { CheckBoxProps } from './checkboxType';

export const CheckBox: React.FC<CheckBoxProps> = ({
  callback,
  height = 24,
  width = 24,
  ...props
}) => {
  const [checked, setChecked] = React.useState<boolean>(false);

  const onChangeHandler = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    callback && callback(checked);
  }, [checked]);

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
