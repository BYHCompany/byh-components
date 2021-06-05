import { ButtonProps } from './../Button/buttonTypes';
export interface PaginatorProps {
  /**
   * Summary pages count
   */
  allPagesCount: number;
  /**
   * Curent page index
   */
  currentPage: number;
  /**
   * Custom callback, gets (index: number) like arg
   */
  callback?: (index: number) => void;
  /**
   * Props for each button, props like in Button API
   */
  buttonProps?: ButtonProps;
}
