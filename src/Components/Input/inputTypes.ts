import { colorVariant } from '../Title/titleType';

export interface InputProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Variant property sets common style of input
   */
  variant?: colorVariant;
  /**
   * Width property sets input width
   */
  width?: number;
  /**
   * Fullwidth sets input's width to 100%
   */
  fullwidth?: boolean;
  /**
   * Height property sets input height
   */
  height?: number;
  /**
   * Sets className on input's div (wrapper)
   */
  className?: string;
  /**
   * Paddings Horizontal property sets input horizontal paddings between input and other elements
   */
  paddingsHorizontal?: number;
  /**
   * Opacity property sets opacity of all element (values: from 0 to 1)
   */
  opacity?: number;
  /**
   * Placeholder property sets input placeholder
   */
  placeholder?: string;
  /**
   * Font size property sets input font size
   */
  fontSize?: number;
  /**
   * Start icon allows to set some React Node to input's start
   */
  startIcon?: React.ReactNode | null;
  /**
   * End icon allows to set some React Node to input's end
   */
  endIcon?: React.ReactNode | null;
  /**
   * Icon Wrapper Transparency do transparent icon wrapper
   */
  isIconWrapperTransparent?: boolean;
  /**
   * Value of input
   */
  value?: string;
  /**
   * On Change handle of input
   */
  onChange?: any;
  /**
   * Allows to set additional props
   */
  [x: string]: any;
}

// Types for styled components
export interface InputAreaProps extends React.ComponentPropsWithoutRef<'div'> {
  variant: colorVariant;
  width: number;
  height: number;
  opacity: number;
  fullwidth: boolean;
}

export interface InputFieldProps extends React.ComponentPropsWithoutRef<'input'> {
  variant: colorVariant;
  fontSize: number;
  width: number;
  height: number;
  paddingsHorizontal: number;
  fullwidth: boolean;
}

export interface InputContentProps extends React.ComponentPropsWithoutRef<'div'> {
  paddingsHorizontal: number;
}

export interface IconWrapperProps extends React.ComponentPropsWithoutRef<'div'> {
  height: number;
  isOnStart: boolean;
  isIconWrapperTransparent: boolean;
}
