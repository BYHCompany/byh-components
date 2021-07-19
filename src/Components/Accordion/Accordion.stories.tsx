import { Story } from '@storybook/react';
import { Accordion } from './Accordion';
import { AccordionProps } from './accordionTypes';
export default {
  title: 'Common/Accordion',
  component: Accordion,
};
const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const Test = Template.bind({});
Test.args = {
  title: 'Обзор',
  children: (
    <ul>
      <li> Один</li>
      <li> Два</li>
      <li> Три</li>
      <li> Один</li>
      <li> Два</li>
      <li> Три</li>
      <li> Один</li>
      <li> Два</li>
      <li> Три</li>
      <li> Один</li>
      <li> Два</li>
      <li> Три</li>
      <li> Один</li>
      <li> Два</li>
      <li> Три</li>
    </ul>
  ),
};
