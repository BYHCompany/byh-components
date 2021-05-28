import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Alert } from './Alert';
import { AlertTypes } from './AlertTypes';

describe('Alert', () => {
  const renderAlert = (args: AlertTypes) => render(<Alert {...args} />);

  it('Alert should be in the document', () => {
    const { getByText } = renderAlert({ variant: 'success', message: 'test alert' });
    expect(getByText('test alert')).toBeInTheDocument();
  });
  it('Alert should be with success background color', () => {
    const { getByTestId } = renderAlert({ variant: 'success', message: 'test alert' });
    expect(getByTestId('alertWrapper')).toHaveStyle({ backgroundColor: '#4FFFAA' });
  });
  it('Alert should be with warning background color', () => {
    const { getByTestId } = renderAlert({ variant: 'warning', message: 'test alert' });
    expect(getByTestId('alertWrapper')).toHaveStyle({ backgroundColor: '#FCFF71' });
  });
  it('Alert should be with danger background color', () => {
    const { getByTestId } = renderAlert({ variant: 'danger', message: 'test alert' });
    expect(getByTestId('alertWrapper')).toHaveStyle({ backgroundColor: '#EB001B' });
  });
  it('Alert should be with success font color', () => {
    const { getByTestId } = renderAlert({ variant: 'success', message: 'test alert' });
    expect(getByTestId('alertWrapper')).toHaveStyle({ color: '#000000' });
  });
  it('Alert should be with warning font color', () => {
    const { getByTestId } = renderAlert({ variant: 'warning', message: 'test alert' });
    expect(getByTestId('alertWrapper')).toHaveStyle({ color: '#000000' });
  });
  it('Alert should be with danger font color', () => {
    const { getByTestId } = renderAlert({ variant: 'danger', message: 'test alert' });
    expect(getByTestId('alertWrapper')).toHaveStyle({ color: '#ffffff' });
  });
  it('Alert should be with with success icon', () => {
    const { getByTestId } = renderAlert({ variant: 'success', message: 'test alert' });
    expect(getByTestId('done')).toBeInTheDocument();
  });
  it('Alert should be with with warning icon', () => {
    const { getByTestId } = renderAlert({ variant: 'warning', message: 'test alert' });
    expect(getByTestId('warning')).toBeInTheDocument();
  });
  it('Alert should be with with danger icon', () => {
    const { getByTestId } = renderAlert({ variant: 'danger', message: 'test alert' });
    expect(getByTestId('danger')).toBeInTheDocument();
  });
  it('Alert should be with with success custom icon', () => {
    const { getByTestId } = renderAlert({
      variant: 'success',
      message: 'test alert',
      customIcon: <AiFillHome data-testid="customIcon" />,
    });
    expect(getByTestId('customIcon')).toBeInTheDocument();
  });
});
