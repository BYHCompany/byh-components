export type sizeTypes = 'ultraSmall' | 'small' | 'medium' | 'large' | 'ultraLarge';

export type colorVariant = 'primary' | 'secondary' | 'default';

export interface TitleProps extends React.HTMLAttributes<HTMLElement> {
  /**
   *Text for the title
   */
  children: React.ReactNode;
  /**
   *There are sizes which you can take, ultraSmall = 24px, small = 30px, medium = 36px, large = 48px, ultraLarge = 60px
   */
  type?: sizeTypes;

  /**
   *Color for the title. You can write your own color
   */
  variant?: colorVariant;
  /**
   *FontWeight of the title
   */
  fontWeight?: number;
  customVariantColor?: string;
  /**
   * Allows to set additional props
   */
  [x: string]: any;
}

export interface TitleWrapperPros extends React.ComponentPropsWithoutRef<'div'> {
  fontWeight?: number;
  variant: colorVariant;
  customVariantColor?: string;
}
