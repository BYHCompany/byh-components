import { Story } from '@storybook/react';
import React from 'react';
import { doneItems, testArray } from './items';
import { Stepper } from './Stepper';
import { StepperProps } from './StepperTypes';

export default {
  title: 'Common/Stepper',
  component: Stepper,
};

const Template: Story<StepperProps> = (args) => <Stepper {...args} />;

export const Default = Template.bind({});
Default.args = {
  doneElements: doneItems,
  allElements: testArray,
};
