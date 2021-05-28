export type StepperElement = {
  id: string;
  value: string;
};

export interface StepperProps {
  /**
   * All elements sets count of unchecked steps - array: [{id: 'string', value: 'string'}, ...]
   */
  allElements: StepperElement[];
  /**
   * Done elements sets checked steps - array: [{id: 'string', value: 'string'}, ...]
   */
  doneElements: StepperElement[];
  /**
   * Custom callback what applies on click on each step and gets like argument element: {id: 'string', value: 'string'}
   */
  callback: (elem: StepperElement) => void;
  /**
   * Max width property sets stepper max width
   */
  maxWidth?: number;
  /**
   * Custom border radius sets border radius for each step, like string, example: '3px 0 3px 10px'
   */
  customStepBorderRadius?: string;
  /**
   * If true sets width to 100%
   */
  fullWidth?: boolean;
  /**
   * Sets distance between steps in px
   */
  distanceBetweenSteps?: number;
}

export interface StepperWrapperProps extends React.ComponentPropsWithoutRef<'div'> {
  maxWidth: number;
  fullWidth: boolean;
}
