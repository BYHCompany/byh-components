import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Input } from './Input';
import { AiFillHome } from 'react-icons/ai';
import { InputProps } from './inputTypes';
// import { withTests } from '@storybook/addon-jest';
// import results from '../../../.jest-test-results.json';

export default {
  title: 'FormControls/Input',
  component: Input,
  // decorators: [withTests({ results })],
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Default',
  variant: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Primary',
  startIcon: <AiFillHome />,
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  placeholder: 'Secondary',
  endIcon: <AiFillHome />,
  variant: 'secondary',
};

// export const defaultView = () => <div>Jest results in storybook</div>;
// defaultView.parameters = {
//   jest: ['input.test.js'],
// };
