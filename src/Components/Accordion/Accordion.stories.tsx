import { Story } from '@storybook/react';
import { Accordion } from './Accordion';
import { AccordionProps } from './accordionTypes';
import './test.css';
export default {
  title: 'Common/Accordion',
  component: Accordion,
};
const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const Test = Template.bind({});
Test.args = {
  title: 'Обзор',
  width: 770,
  children: (
    <ul className="advert-accordion__content">
      <li> Электрические стеклоподъемники cзади</li>
      <li> Система предварительного обогрева авто</li>
      <li> Обычный усилитель руля</li>
      <li> Передние парктроники</li>
      <li> Система предварительного обогрева авто</li>
      <li> Запуск двигателя с кнопки</li>
      <li> Регулируемые педали</li>
      <li> Закрытие багажника с кнопки</li>
      <li> Декоративные молдинги</li>
      <li> Защита от проникновение в салон</li>
      <li> Мультимедиа для задних пассажиров</li>
      <li> Передние боковые подушки безопасноти</li>
      <li> Распознавание дорожных знаков</li>
      <li> Антиблокировочная система(ABS)</li>
      <li> Запаска (полноценное пятое колесо)</li>
    </ul>
  ),
};
