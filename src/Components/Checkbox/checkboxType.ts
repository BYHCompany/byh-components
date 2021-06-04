export interface StyledCheckboxProps extends React.ComponentPropsWithoutRef<'div'> {
  checked: boolean;
  height?: number;
  width?: number;
}

export interface CheckBoxProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Height of the checkbox
   */
  height?: number;
  /**
   * Width of the checkbox
   */
  width?: number;
  /**
   * Onchange function for the checkbox
   */
  onChangeHandler: () => void;
  /**
   * State of checkbox
   */
  checked: boolean;
  /**
   * Allows to set additional props
   */
  [x: string]: any;
}
