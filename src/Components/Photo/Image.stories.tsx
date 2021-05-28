import { Story } from '@storybook/react';
import React from 'react';
import { ImageComponent } from './Image';
import { PhotoProps } from './imageType';

export default {
  title: 'Common/Photo',
  component: ImageComponent,
};

const Template: Story<PhotoProps> = (args) => <ImageComponent {...args} />;

export const Main = Template.bind({});
Main.args = {
  src:
    'https://images.unsplash.com/photo-1621876844834-6edee3083b9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
};
