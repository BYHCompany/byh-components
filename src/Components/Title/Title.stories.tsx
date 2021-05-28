import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Title } from './Title';
import { TitleProps } from './titleType';

export default {
  title: 'Common/Title',
  component: Title,
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Title',
  type: 'medium',
  variant: 'primary',
};
