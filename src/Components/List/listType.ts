export type ListContent = {
  name: string;
  id: number;
};

export interface ListProps extends React.HTMLAttributes<HTMLElement> {
  /**
   *Array of objects comprising name: string (name of each list item) id: string
   */
  list: ListContent[];
  /**
   *Callback which return all your list item object
   */
  setClicked: (item: number) => void;

  clicked: number | undefined;
  /**
   *Font size of each list item
   */
  fontSize?: number;
  /**
   *Distance Between each list item
   */
  distanceBetweenLi?: number;
  /**
   * Allows to set additional props
   */
  [x: string]: any;
}

export interface ListItemProps extends React.ComponentPropsWithoutRef<'li'> {
  fontWeight?: number;
  distanceBetweenLi?: number;
}

export interface ListItemWrapProps extends React.ComponentPropsWithoutRef<'div'> {
  fontSize?: number;
}
export interface ArrowIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  fontSize?: number;
}
