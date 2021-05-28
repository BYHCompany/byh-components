import { Story } from '@storybook/react';
import React from 'react';
import { CheckBox } from './CheckBox';
import { CheckBoxProps } from './checkboxType';

export default {
  title: 'Common/CheckBox',
  component: CheckBox,
};
const Template: Story<CheckBoxProps> = (args) => <CheckBox {...args} />;

export const Main = Template.bind({});
Main.args = {};
