export interface DescriptionListProps extends React.HTMLAttributes<HTMLElement> {
  fontSize?: number;
  width?: number;
  obj: any;
  hide?: boolean;
  handleHide?: () => void;
}

export interface dlProps extends React.ComponentPropsWithoutRef<'dl'> {
  fontSize?: number;
  width?: number;
}
export interface ddProps extends React.ComponentPropsWithoutRef<'dl'> {
  children?: React.ReactNode;
}
