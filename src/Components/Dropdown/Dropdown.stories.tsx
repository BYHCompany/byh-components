import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Dropdown } from './Dropdown';
import { DropdownProps, ItemType } from './DropdownTypes';

export default {
  title: 'FormControls/Dropdown',
  component: Dropdown,
} as Meta;

const getAllYears = () => {
  const earliestYear = 1890;
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i >= earliestYear; i--) {
    years.push(i);
  }
  return years;
};

const createArrayObjectOfAllYears = (value: string) => {
  const arrayOfYears = getAllYears();

  const createArrayOfObjects = arrayOfYears.map((y) => {
    const data = {
      label: y.toString(),
      id: y.toString(),
      value: value,
    };
    return data;
  });

  return createArrayOfObjects;
};
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
  items: createArrayObjectOfAllYears('yearFrom'),
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
