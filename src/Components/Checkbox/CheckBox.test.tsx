import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { CheckBox } from './CheckBox';

describe('CheckBox', () => {
  const getCheckbox = (height?: number, width?: number) => {
    return render(<CheckBox callback={() => {}} height={height} width={width} />);
  };

  it('Checkbox should be rendered i the document', () => {
    const { getByTestId } = getCheckbox();
    expect(getByTestId('checkbox')).toBeInTheDocument();
  });

  it('after user click checkbox should be selected', () => {
    const { getByTestId } = getCheckbox();
    const checkbox = getByTestId('icon');
    userEvent.click(checkbox);
    expect(checkbox).toHaveStyle({
      color: '#fff',
    });
  });
  it('height of checked should be 50', () => {
    const { getByTestId } = getCheckbox(50);
    const checkbox = getByTestId('icon');

    expect(checkbox).toHaveStyle({
      height: '50px',
    });
  });
  it(' checkbox width should be 50', () => {
    const { getByTestId } = getCheckbox(50, 50);
    const checkbox = getByTestId('icon');
    expect(checkbox).toHaveStyle({
      width: '50px',
    });
  });
  it(' checkbox container width should be 50', () => {
    const { getByTestId } = getCheckbox(50, 50);
    const checkboxCustomContainer = getByTestId('styled-checkbox');
    expect(checkboxCustomContainer).toHaveStyle({
      width: '50px',
    });
  });
  it(' checkbox container height should be 50', () => {
    const { getByTestId } = getCheckbox(50, 50);
    const checkboxCustomContainer = getByTestId('styled-checkbox');
    expect(checkboxCustomContainer).toHaveStyle({
      height: '50px',
    });
  });
});
