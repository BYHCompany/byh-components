import { Story } from '@storybook/react';
import React from 'react';
import { DescriptionList } from './DescriptionList';
import { DescriptionListProps } from './descriptionListType';
export default {
  title: 'Common/DescriptionList',
  component: DescriptionList,
};
const Template: Story<DescriptionListProps> = (args) => <DescriptionList {...args} />;

export const Main = Template.bind({});
Main.args = {
  description: 'sdldldll',
  header: ',c,cd',
};
