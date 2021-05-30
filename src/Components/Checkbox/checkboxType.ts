export interface StyledCheckboxProps extends React.ComponentPropsWithoutRef<'div'> {
  checked: boolean;
  height?: number;
  width?: number;
}

export interface CheckBoxProps extends React.HTMLAttributes<HTMLElement> {
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
  /**
   * Allows to set additional props
   */
  [x: string]: any;
}
