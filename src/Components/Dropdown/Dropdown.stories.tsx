import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Dropdown } from './Dropdown';
import { DropdownProps, ItemType } from './DropdownTypes';

export default {
  title: 'FormControls/Dropdown',
  component: Dropdown,
} as Meta;

const array = [
  { label: 'Латвия', id: '1231', value: 'LV' },
  { label: 'Литва', id: '1232', value: 'LT' },
  { label: 'Эстония', id: '1233', value: 'EST' },
  { label: 'Россия', id: '1234', value: 'RU' },
  { label: 'Германия', id: '1235', value: 'GE' },
  { label: 'Польша', id: '1236', value: 'PL' },
  { label: 'Нидерланды', id: '1237', value: 'NL' },
  { label: 'Испания', id: '1238', value: 'SP' },
] as ItemType[];

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  label: 'Default',
  items: array,
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Primary',
  items: array,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Secondary',
  items: array,
};
