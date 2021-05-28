import { Story } from '@storybook/react';
import React from 'react';
import { RangeSlider } from './RangeSlider';
import { RangeSliderProps } from './rangeSliderType';

export default {
  title: 'Common/RangeSlider',
  component: RangeSlider,
};

const Template: Story<RangeSliderProps> = (args) => <RangeSlider {...args} />;

export const RangeSliderExample = Template.bind({});
RangeSliderExample.args = {
  min: 0,
  max: 1000,
};
