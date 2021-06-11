import { Meta, Story } from '@storybook/react';
import { Toggler } from './Toggler';

export default {
  title: 'Common/Toggler',
  component: Toggler,
} as Meta;

const Template: Story = (args) => <Toggler {...args} />;

export const Primary = Template.bind({});
