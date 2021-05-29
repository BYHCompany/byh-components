export interface RangeSliderProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Min Value of slider
   */
  min: number;
  /**
   * Max Value of slider
   */
  max: number;
  /**
   * Allows to set custom callback that gets like arg: (minVal: number, maxVal: number)
   */
  callback: (minVal: number, maxVal: number) => void;
  /**
   * Allows to set additional props
   */
  [x: string]: any;
}
