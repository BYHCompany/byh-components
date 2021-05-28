export interface StyledCheckboxProps extends React.ComponentPropsWithoutRef<'div'> {
  checked: boolean;
  height?: number;
  width?: number;
}

export interface CheckBoxProps {
  /**
   * custom callback which takes value of checkbox (boolean)
   */
  callback: (checked: boolean) => void;
  /**
   * Height of the checkbox
   */
  height?: number;
  /**
   * Width of the checkbox
   */
  width?: number;
}
