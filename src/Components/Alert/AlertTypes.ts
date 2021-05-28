type AlertVariant = 'success' | 'warning' | 'danger';

export interface AlertTypes {
  /**
   * Variant property sets common alert style ('success' | 'warning' | 'danger')
   */
  variant: AlertVariant;
  /**
   * Width property sets alert width
   */
  width?: number;
  /**
   * Height property sets alert height
   */
  height?: number;
  /**
   * Message sets alert's message
   */
  message: string;
  /**
   * Font size sets alert's message font size
   */
  fontSize?: number;
  /**
   * Padding sets alert's paddings
   */
  padding?: number;
  /**
   * This property sets custom icon if you want change default icon
   */
  customIcon?: React.ReactNode;
}

export interface AlertWrapperProps extends React.ComponentPropsWithoutRef<'div'> {
  width: number;
  height: number;
  variant: AlertVariant;
  padding: number;
}

export interface AlertTextWrapperProps extends React.ComponentPropsWithoutRef<'div'> {
  fontSize: number;
}
