import React from 'react';
import { TogglerBackground, TogglerSwitcher, TogglerWrapper } from './TogglerElements';
import './Toggler.css';
import { TogglerProps } from './TogglerTypes';

export const Toggler: React.FC<TogglerProps> = ({
  value = false,
  onChange,
}): React.ReactElement => {
  const [isChecked, setChecked] = React.useState(value);

  const toggleSwitch = () => {
    setChecked(!isChecked);
    onChange && onChange(isChecked);
  };

  return (
    <TogglerWrapper>
      <TogglerBackground isChecked={isChecked} onClick={toggleSwitch} htmlFor="toggleSwitch">
        <TogglerSwitcher
          className={`${isChecked ? 'translate__right' : 'translate__left'}`}
          isChecked={isChecked}
        />
      </TogglerBackground>
    </TogglerWrapper>
  );
};
