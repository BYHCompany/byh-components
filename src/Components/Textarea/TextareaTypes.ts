export type Variant = 'primary' | 'default';
export interface TextareaProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Variant sets common style of textarea
   */
  variant?: Variant;
  /**
   * Value sets textarea's value
   */
  value?: string;
  /**
   * Width property sets textarea's width
   */
  width?: number;
  /**
   * Height property sets textarea's width
   */
  height?: number;
  /**
   * Font size property sets font size
   */
  fontSize?: number;
  /**
   * Padding property sets paddings in input
   */
  padding?: number;
  /**
   * Placeholder sets textarea's placeholder
   */
  placeholder: string;
  /**
   * Placeholder color sets textarea's placeholder color
   */
  placeholderColor?: string;
  /**
   * On Input callback may be used as custom callback
   */
  onChange?: any;
  /**
   * Allows to set additional props
   */
  [x: string]: any;
}
export interface TextAreaWrapperProps extends React.ComponentPropsWithoutRef<'div'> {
  variant: 'primary' | 'default';
  padding: number;
  width: number;
  inputHeight: number | 'auto';
}

export interface TextareaInputProps extends React.ComponentPropsWithoutRef<'textarea'> {
  placeholderColor: string;
  inputHeight: number | 'auto';
  fontSize: number;
  padding: number;
}
