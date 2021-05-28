import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Textarea } from './Textarea';
import { TextareaProps } from './TextareaTypes';

export default {
  title: 'FormControls/TextArea',
  component: Textarea,
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  placeholder: 'Default textarea',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  placeholder: 'Primary textarea',
};
