import { Story } from '@storybook/react';
import React from 'react';
import { List } from './List';
import { ListProps } from './listType';

export default {
  title: 'Common/List',
  component: List,
};

const Template: Story<ListProps> = (args) => <List {...args} />;

export const ListExample = Template.bind({});
ListExample.args = {
  list: [
    {
      id: 'aksmdklmad',
      name: 'Abath',
    },
    {
      id: 'nnnjsas',
      name: 'Alfa Romeo',
    },
    {
      id: '99xmzlfv',
      name: 'Alpina',
    },

    {
      id: 'jjjasrt',
      name: 'Aro',
    },
  ],
};
