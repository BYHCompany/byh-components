export interface PaperProps extends React.HTMLAttributes<HTMLElement> {
  /**
   *Height of paper, if (!height) height = 100%, if (!!maxHeight) height = 100%
   */
  height?: number;
  /**
   *Width of paper, if (!width) width = 100%, if (!!maxWidth) height = 100%
   */
  width?: number;
  /**
   *React.ReactNode (default react children)
   */
  children: React.ReactNode;
  /**
   *maxHeight of paper,
   */
  maxHeight?: number;
  /**
   *maxHeight of paper,
   */
  maxWidth?: number;
  /**
   *borderRadius of paper,
   */
  borderRadius?: string;
  /**
   *boxShadow of paper,
   */
  boxShadow?: boolean;
  /**
   *custom BackGroundColor of paper
   */
  customBgColor?: string;
  /**
   *display of paper,
   */
  display?: string;
  /**
   * Allows to set additional props
   */

  [x: string]: any;
}

export interface PaperWrapperProps extends React.ComponentPropsWithoutRef<'div'> {
  height?: number;
  width?: number;
  maxHeight?: number;
  maxWidth?: number;
  boxShadow?: boolean;
  borderRadius?: string;
  customBgColor?: string;
  display?: string;
}
