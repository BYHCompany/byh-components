import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Paper } from './Paper';
import { PaperProps } from './paperType';
import { ImageComponent } from '../Photo/Image';
export default {
  title: 'Common/Paper',
  component: Paper,
} as Meta;

const Template: Story<PaperProps> = (args) => <Paper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <div style={{ padding: 20, display: 'flex' }}>
        <ImageComponent
          src={
            'https://images.unsplash.com/photo-1614701466929-766271250d48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
          }
        />
        <ImageComponent
          src={
            'https://images.unsplash.com/photo-1614701466929-766271250d48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
          }
        />
        <ImageComponent
          src={
            'https://images.unsplash.com/photo-1614701466929-766271250d48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
          }
        />
        <ImageComponent
          src={
            'https://images.unsplash.com/photo-1614701466929-766271250d48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
          }
        />
        <ImageComponent
          src={
            'https://images.unsplash.com/photo-1614701466929-766271250d48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
          }
        />
        <ImageComponent
          src={
            'https://images.unsplash.com/photo-1614701466929-766271250d48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
          }
        />
        <ImageComponent
          src={
            'https://images.unsplash.com/photo-1614701466929-766271250d48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
          }
        />
        <ImageComponent
          src={
            'https://images.unsplash.com/photo-1614701466929-766271250d48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
          }
        />
      </div>
    </>
  ),
};
