export interface TogglerProps {
  value: boolean;
  onChange: any;
}

export interface TogglerSwitcherTypes extends React.ComponentPropsWithoutRef<'label'> {
  isChecked: boolean;
}

export interface TogglerBackgroundTypes extends React.ComponentPropsWithoutRef<'div'> {
  isChecked: boolean;
}
