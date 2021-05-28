import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { ItemType, DropdownProps } from './DropdownTypes';
import { render } from '@testing-library/react';
import { Dropdown } from './Dropdown';
import userEvent from '@testing-library/user-event';

describe('Dropdown menu', () => {
  const array = [
    { label: 'Латвия', id: '1231', value: 'LV' },
    { label: 'Литва', id: '1232', value: 'LT' },
    { label: 'Эстония', id: '1233', value: 'EST' },
    { label: 'Россия', id: '1234', value: 'RU' },
    { label: 'Германия', id: '1235', value: 'GE' },
    { label: 'Польша', id: '1236', value: 'PL' },
    { label: 'Нидерланды', id: '1237', value: 'NL' },
    { label: 'Испания', id: '1238', value: 'SP' },
  ] as ItemType[];

  const renderDropdown = (args: DropdownProps) => render(<Dropdown {...args} />);

  const mockedFn = jest.fn();
  it('Dropdown should be in the document', () => {
    const { getByText } = renderDropdown({
      items: array,
      callback: mockedFn,
      label: 'Test label',
    });
    expect(getByText('Test label')).toBeInTheDocument();
  });
  it('Dropdown should show right items', () => {
    const { getByText } = renderDropdown({
      items: array,
      callback: mockedFn,
      label: 'Test label',
    });
    userEvent.click(getByText('Test label'));
    expect(getByText(array[3].label)).toBeInTheDocument();
  });
  it('Dropdown should show right item on label place', () => {
    const { getByText } = renderDropdown({
      items: array,
      callback: mockedFn,
      label: 'Test label',
    });
    userEvent.click(getByText('Test label'));
    userEvent.click(getByText(array[3].label));
    expect(getByText(array[3].label)).toBeInTheDocument();
  });
  it('Dropdown should show default label after click on ---', () => {
    const { getByText } = renderDropdown({
      items: array,
      callback: mockedFn,
      label: 'Test label',
    });
    userEvent.click(getByText('Test label'));
    userEvent.click(getByText('---'));
    expect(getByText('Test label')).toBeInTheDocument();
  });
  it('Dropdown should show default background color', () => {
    const { getByText } = renderDropdown({
      items: array,
      callback: mockedFn,
      label: 'Test label',
      variant: 'default',
    });
    expect(getByText('Test label')).toHaveStyle({ backgroundColor: '#ffffff' });
  });
  it('Dropdown should show primary background color', () => {
    const { getByText } = renderDropdown({
      items: array,
      callback: mockedFn,
      label: 'Test label',
      variant: 'primary',
    });
    expect(getByText('Test label')).toHaveStyle({ backgroundColor: '#072832' });
  });
  it('Dropdown should show secondary background color', () => {
    const { getByText } = renderDropdown({
      items: array,
      callback: mockedFn,
      label: 'Test label',
      variant: 'secondary',
    });
    expect(getByText('Test label')).toHaveStyle({ backgroundColor: 'rgba(255,255,255,0.5)' });
  });
  it('Dropdown should show primary selected text color', () => {
    const { getByText } = renderDropdown({
      items: array,
      callback: mockedFn,
      label: 'Test label',
      variant: 'primary',
    });
    userEvent.click(getByText('Test label'));
    userEvent.click(getByText(array[3].label));
    expect(getByText(array[3].label)).toHaveStyle({ color: '#ffffff' });
  });
  it('Dropdown should show default selected text color', () => {
    const { getByText } = renderDropdown({
      items: array,
      callback: mockedFn,
      label: 'Test label',
      variant: 'default',
    });
    userEvent.click(getByText('Test label'));
    userEvent.click(getByText(array[3].label));
    expect(getByText(array[3].label)).toHaveStyle({ color: '#000000' });
  });
  it('Dropdown should show secondary selected text color', () => {
    const { getByText } = renderDropdown({
      items: array,
      callback: mockedFn,
      label: 'Test label',
      variant: 'secondary',
    });
    userEvent.click(getByText('Test label'));
    userEvent.click(getByText(array[3].label));
    expect(getByText(array[3].label)).toHaveStyle({ color: '#000000' });
  });
  it('Dropdown should show default label color after click on ---', () => {
    const { getByText } = renderDropdown({
      items: array,
      callback: mockedFn,
      label: 'Test label',
      variant: 'default',
    });
    userEvent.click(getByText('Test label'));
    userEvent.click(getByText('---'));
    expect(getByText('Test label')).toHaveStyle({ color: '#8C8C8C' });
  });
  it('Dropdown should show primary label color after click on ---', () => {
    const { getByText } = renderDropdown({
      items: array,
      callback: mockedFn,
      label: 'Test label',
      variant: 'primary',
    });
    userEvent.click(getByText('Test label'));
    userEvent.click(getByText('---'));
    expect(getByText('Test label')).toHaveStyle({ color: '#ffffff' });
  });
  it('Dropdown should show secondary label color after click on ---', () => {
    const { getByText } = renderDropdown({
      items: array,
      callback: mockedFn,
      label: 'Test label',
      variant: 'secondary',
    });
    userEvent.click(getByText('Test label'));
    userEvent.click(getByText('---'));
    expect(getByText('Test label')).toHaveStyle({ color: '#8C8C8C' });
  });
});
