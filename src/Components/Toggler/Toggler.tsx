import React from 'react';
import { TogglerBackground, TogglerSwitcher, TogglerWrapper } from './TogglerElements';
import { TogglerProps } from './TogglerTypes';

export const Toggler: React.FC<TogglerProps> = ({
  value = false,
  onChange,
  height = 44,
  width = 80,
  padding = 4
}): React.ReactElement => {
  const [isChecked, setChecked] = React.useState(value);
  let isFirst = true

  const switcherWidthAndHeight = height - (2 * padding)
  const transformDistance = width - height

  const toggleSwitch = () => {
    isFirst = false
    setChecked(!isChecked);
    onChange && onChange(!isChecked);
  };

  return (
    <TogglerWrapper height={height} width={width} >
      <TogglerBackground padding={padding} isChecked={isChecked} onClick={toggleSwitch} htmlFor="toggleSwitch">
        <TogglerSwitcher
          heightAndWidth={switcherWidthAndHeight}
          move={isFirst && isChecked ? 'ŗight' : 'left'}
          distance={transformDistance}
          isChecked={isChecked}
        />
      </TogglerBackground>
    </TogglerWrapper>
  );
};