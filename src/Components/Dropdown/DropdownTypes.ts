type Variant = 'primary' | 'secondary' | 'default';
export type ItemType = {
  label: string;
  id: string;
  value: any;
};
export interface DropdownProps {
  /**
   * Label property sets default label of dropdown
   */
  label: string;
  /**
   * Width property sets dropdown's width
   */
  width?: number;
  /**
   * Height property sets dropdown's height
   */
  height?: number;
  /**
   * Variant property sets common dropdown's style
   */
  variant?: Variant;
  /**
   * Custom border sets customized border for dropdown (example, "3px 3px 0 0")
   */
  customBorder?: string;
  /**
   * Label font size sets label font size
   */
  labelFontSize?: number;
  /**
   * Items font size sets items font size
   */
  itemsFontSize?: number;
  /**
   * Padding property sets dropdown's paddings
   */
  padding?: number;
  /**
   * Items - array of displayed items as { id: string, value: string, label: string }
   */
  items: ItemType[];
  /**
   * Item scroll height sets items div height and adds scroll, if items didn't fit
   */
  itemsScrollHeight?: number;
  /**
   * Custom callback that gets like argument - { id: string, value: string, label: string }
   */
  callback: (item: ItemType) => void;
}

export interface DIVProps extends React.ComponentPropsWithoutRef<'div'> {
  width: number;
}

export interface LiProps extends React.ComponentPropsWithoutRef<'li'> {
  lastElement: boolean;
  height: number;
  itemsFontSize: number;
  padding: number;
  variant: Variant;
}

export interface LabelDivProps extends React.ComponentPropsWithoutRef<'div'> {
  height: number;
  width: number;
  labelFontSize: number;
  padding: number;
  customBorder: string;
  variant: Variant;
  isChosenElem: boolean;
  isDefaultValue: boolean;
  isItemsVisible: boolean;
}

export interface ULProps extends React.ComponentPropsWithoutRef<'ul'> {
  itemsScrollHeight: number;
}

export interface AsideProps extends React.ComponentPropsWithoutRef<'aside'> {
  width: number;
}
