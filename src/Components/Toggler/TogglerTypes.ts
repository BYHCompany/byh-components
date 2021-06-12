export interface TogglerProps {
  value: boolean;
  onChange: any;
  height?: number;
  width?: number;
  padding?: number
}

export interface TogglerSwitcherWrapperTypes extends React.ComponentPropsWithoutRef<'div'> {
  width: number
  height: number
}

export interface TogglerSwitcherTypes extends React.ComponentPropsWithoutRef<'div'> {
  isChecked: boolean;
  heightAndWidth: number
  move: 'left' | 'ŗight'
  distance: number
}

export interface TogglerBackgroundTypes extends React.ComponentPropsWithoutRef<'div'> {
  isChecked: boolean;
  padding: number
}
