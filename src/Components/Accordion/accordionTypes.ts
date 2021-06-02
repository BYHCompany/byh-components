export interface AccordionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  children: React.ReactNode;
  width: number;
  [x: string]: any;
}
export interface AccordionButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  isOpen: boolean;
  width: number;
}
