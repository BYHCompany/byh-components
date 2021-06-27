export interface DescriptionListProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Font size of each item in list
   */
  fontSize?: number;
  /**
   * Width of all list
   */
  width?: number;
  /**
   * Second part of list
   */
  description: string | number | React.ReactNode | React.ReactElement;
  /**
   * Parm for hide second part of list
   */
  hide?: boolean;
  /**
   * Callback for hiding
   */
  handleHide?: () => void;
  /**
   * First part of list
   */
  header: string;
  /**
   * text of show button
   */
  showButtonText?: string | React.ReactNode;
}

export interface dlProps extends React.ComponentPropsWithoutRef<'dl'> {
  fontSize?: number;
  width?: number;
}
export interface ddProps extends React.ComponentPropsWithoutRef<'dl'> {
  children?: React.ReactNode;
}
