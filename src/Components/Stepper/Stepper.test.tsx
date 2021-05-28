import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import { Stepper } from './Stepper';
import userEvent from '@testing-library/user-event';
import { doneItems, testArray } from './items';
describe('Stepper', () => {
  const myCallback = jest.fn();
  const renderStepper = (args?: any) =>
    render(
      <Stepper allElements={testArray} doneElements={doneItems} callback={myCallback} {...args} />,
    );
  it('Stepper should be in the document', () => {
    const { getByTestId } = renderStepper();
    expect(getByTestId('stepperWrapper')).toBeInTheDocument();
  });
  it('Custom callback should be called correctly', () => {
    const { getAllByTestId } = renderStepper();
    userEvent.click(getAllByTestId('icon-wrapper')[0]);
    expect(myCallback).toBeCalledTimes(1);
  });
  it('Width should be 100% when fullwidth is true', () => {
    const { getByTestId } = renderStepper({ fullWidth: true });
    expect(getByTestId('stepperWrapper')).toHaveStyle({ width: '100%' });
  });
});
