import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from './Button';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { ButtonProps } from './buttonTypes';

export default {
  title: 'Common/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Primary Button',
  paddingHorizontal: 30,
  paddingVertical: 15,
  fontSize: 20,
  height: 50,
  width: 300,
  startIcon: <BsFillHouseDoorFill />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
  paddingHorizontal: 25,
  paddingVertical: 15,
  fontSize: 20,
  endIcon: <BsFillHouseDoorFill />,
  height: 50,
  width: 300,
};
export const WithoutIcons = Template.bind({});
WithoutIcons.args = {
  label: 'Secondary Button',
  variant: 'secondary',
  paddingHorizontal: 25,
  paddingVertical: 15,
  fontSize: 20,
  height: 50,
  width: 300,
};
export const Tags = Template.bind({});
Tags.args = {
  tag: true,
  customBgColor: '#99bfe3',
  customFontColor: 'red',
  paddingHorizontal: 5,
  paddingVertical: 5,
  height: 30,
  width: 30,
  fontSize: 15,
  startIcon: <BsFillHouseDoorFill />,
};
export const ColoredButton = Template.bind({});
ColoredButton.args = {
  label: 'ColoredButton',
  customBgColor: '#99bfe3',
  customFontColor: 'red',
  paddingHorizontal: 15,
  paddingVertical: 15,
  height: 40,
  width: 300,
  fontSize: 22,
  startIcon: <BsFillHouseDoorFill />,
};
