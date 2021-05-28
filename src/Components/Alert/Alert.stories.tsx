import { Story } from '@storybook/react';
import React from 'react';
import { Alert } from './Alert';
import { AlertTypes } from './AlertTypes';

export default {
  title: 'Common/Alert',
  component: Alert,
};

const Template: Story<AlertTypes> = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  message: 'This is success alert message! ',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  message: 'This is warning alert message! ',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  message: 'This is danger alert message! ',
};
