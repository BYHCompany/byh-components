export interface PhotoProps {
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
}
export interface PhotoWrapperProp extends React.ComponentPropsWithoutRef<'div'> {
  src: string;
  height: number;
  width: number;
}
