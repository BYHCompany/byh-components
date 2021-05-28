import { colorVariant } from '../Title/titleType';

export type buttonDif = {
  label: string;
  id: string;
  value?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

export type ButtonGroupProps = {
  /**
   *expected array of objects all params: 
   label: string,(text of each button) |
   id: string,(id for key in map method) |
  value?: string (value which ) |
  startIcon?: React.ReactNode (React Icons ) |
  endIcon?: React.ReactNode (React Icons ) 
   */
  buttons: Array<buttonDif>;
  /**
   set width of all buttonGroup
   */
  width: number;
  /**
   set height of all buttonGroup
   */
  height: number;
  /**
   set fontsize of each button
   */
  fontSize: number;
  /**
   default VARIANT of not selected button
   */
  defVariant?: colorVariant;

  /**
   custom callback. return string value of selected button, if value from button not selected return label
   */
  callback: (value: buttonDif) => void;
};

export interface ButtonWrapperProps extends React.ComponentPropsWithoutRef<'div'> {
  width: number;
  height: number;
}
