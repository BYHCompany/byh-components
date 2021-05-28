export type sizeTypes = 'ultraSmall' | 'small' | 'medium' | 'large' | 'ultraLarge';
export type colorVariant = 'primary' | 'secondary' | 'default';

export type TitleProps = {
  /**
   *Text for the title
   */
  text: string;
  /**
   *There are sizes which you can take, but also you can write your own
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
};

export interface TitleWrapperPros extends React.ComponentPropsWithoutRef<'div'> {
  fontWeight?: number;
  variant: colorVariant;
  customVariantColor?: string;
}
