export interface PhotoProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Photo src
   */
  src: string;
  /**
   * Height of photo
   */
  height?: number;
  /**
   * Width of photo
   */
  width?: number;
  /**
   * Allows to set additional props
   */
  [x: string]: any;
}
export interface PhotoWrapperProp extends React.ComponentPropsWithoutRef<'div'> {
  src: string;
  height: number;
  width: number;
}
