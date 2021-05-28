import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Paper } from './Paper';
import { PaperProps } from './paperType';

export default {
  title: 'Common/Paper',
  component: Paper,
} as Meta;

const Template: Story<PaperProps> = (args) => <Paper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  height: 600,
  width: 600,
};
