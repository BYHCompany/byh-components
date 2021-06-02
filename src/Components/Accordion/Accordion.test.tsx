import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Accordion } from './Accordion';
import userEvent from '@testing-library/user-event';

describe('Accordion', () => {
  const getAccordion = () => {
    return render(
      <Accordion title="Test" children={<h1 data-testid="content">Test Header</h1>} width={300} />,
    );
  };
  it('Accordion should be rendered in the document', () => {
    const { getByTestId } = getAccordion();
    expect(getByTestId('accordion-wrapper')).toBeInTheDocument();
  });
  it('After click accordion should be opened', () => {
    const { getByTestId } = getAccordion();
    const button = getByTestId('accordion-button');
    const content = getByTestId('content');
    userEvent.click(button);
    expect(content).toBeInTheDocument();
  });
});
