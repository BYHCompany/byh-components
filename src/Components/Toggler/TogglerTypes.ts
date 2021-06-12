export interface TogglerProps {
  /**
   * Sets toggler value
   */
  value: boolean;
  /**
   * Callback that gets toggler value (for control element)
   */
  onChange: any;
  /**
   * Sets height of toggler
   */
  height?: number;
  /**
   * Sets width of toggler
   */
  width?: number;
  /**
   * Sets paddings of toggler
   */
  padding?: number;
}

export interface TogglerSwitcherWrapperTypes extends React.ComponentPropsWithoutRef<'div'> {
  width: number;
  height: number;
}

export interface TogglerSwitcherTypes extends React.ComponentPropsWithoutRef<'div'> {
  isChecked: boolean;
  heightAndWidth: number;
  move: 'left' | 'ŗight';
  distance: number;
}

export interface TogglerBackgroundTypes extends React.ComponentPropsWithoutRef<'div'> {
  isChecked: boolean;
  padding: number;
}
