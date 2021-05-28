export type ListContent = {
  name: string;
  id: string;
};

export interface ListProps {
  /**
   *Array of objects comprising name: string (name of each list item) id: string
   */
  list: ListContent[];
  /**
   *Callback which return all your list item object
   */
  callback: (item: ListContent) => void;
  /**
   *Font size of each list item
   */
  fontSize?: number;
  /**
   *Distance Between each list item
   */
  distanceBetweenLi?: number;
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
