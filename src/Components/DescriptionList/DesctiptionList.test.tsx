import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { DescriptionList } from './DescriptionList';

describe('DescriptionList', () => {
  const getDescriptionList = () => {
    return render(<DescriptionList width={300} value="2020" key="Год" />);
  };
  it('DescriptionList should be rendered in the document', () => {
    const { getByTestId } = getDescriptionList();
    expect(getByTestId('styleDl')).toBeInTheDocument();
  });
  it('DescriptionList Item should be rendered in the document', () => {
    const { getByTestId } = getDescriptionList();
    expect(getByTestId('item-wrapper')).toBeInTheDocument();
  });
});
