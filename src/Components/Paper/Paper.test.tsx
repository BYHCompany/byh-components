import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { Paper } from './Paper';

describe('Paper', () => {
  const getPaper = (args?: any) => {
    return render(<Paper {...args} children={<h1>Hello</h1>} />);
  };
  it('Paper should render in the document', () => {
    const { getByTestId } = getPaper();
    expect(getByTestId('paper')).toBeInTheDocument();
  });
  it('Height of paper should be 500(custom value)  ', () => {
    const { getByTestId } = getPaper({ height: 300, width: 300 });
    expect(getByTestId('paper')).toHaveStyle({ height: '300px' });
  });
  it('Width of paper should be 500(custom value)  ', () => {
    const { getByTestId } = getPaper({ height: 300, width: 400 });
    expect(getByTestId('paper')).toHaveStyle({ width: '400px' });
  });
  it('Height should be 100% because maxHeight is set   ', () => {
    const { getByTestId } = getPaper({ height: 300, maxHeight: 300 });
    expect(getByTestId('paper')).toHaveStyle({ height: '100%' });
  });
  it('Width should be 100% because maxWidth is set ', () => {
    const { getByTestId } = getPaper({ maxWidth: 300, width: 400 });
    expect(getByTestId('paper')).toHaveStyle({ width: '100%' });
  });
  it('Width should be 100% because maxWidth is set ', () => {
    const { getByTestId } = getPaper({ maxWidth: 300, width: 400 });
    expect(getByTestId('paper')).toHaveStyle({ width: '100%' });
  });
  it('Without setting height, height of paper should be 100%', () => {
    const { getByTestId } = getPaper({ width: 400 });
    expect(getByTestId('paper')).toHaveStyle({ height: '100%' });
  });
  it('Without setting width, width of paper should be 100%', () => {
    const { getByTestId } = getPaper({ height: 400 });
    expect(getByTestId('paper')).toHaveStyle({ width: '100%' });
  });
});
