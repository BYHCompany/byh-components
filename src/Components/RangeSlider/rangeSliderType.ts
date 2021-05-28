export interface RangeSliderProps {
  /**
   * Min Value of slider
   */
  min: number;
  /**
   * Max Value of slider
   */
  max: number;

  callback: (minVal: number, maxVal: number) => void;
}
