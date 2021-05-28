import React from 'react';
import { render, screen } from '@testing-library/react';
import { Title } from './Title';
import '@testing-library/jest-dom/extend-expect';
import { colorVariant, sizeTypes } from './titleType';

describe('Button', () => {
  const getTitle = (type?: sizeTypes, customVariantColor?: string, variant?: colorVariant) => {
    return render(
      <Title
        text={'Hello'}
        type={type}
        fontWeight={700}
        variant={variant}
        customVariantColor={customVariantColor}
      />,
    );
  };

  it('text in title should be Hello', () => {
    const { getByText } = getTitle();
    expect(getByText('Hello')).toBeInTheDocument();
  });
  it('title should be exist in the document', () => {
    const { getByRole } = getTitle();
    expect(getByRole('heading')).toBeInTheDocument();
  });
  it('title should be ultraSmall size', () => {
    const { getByTestId } = getTitle('ultraSmall');
    expect(getByTestId('h5')).toBeInTheDocument();
  });
  it('title should be small size', () => {
    const { getByTestId } = getTitle('small');
    expect(getByTestId('h4')).toBeInTheDocument();
  });
  it('title should be medium size', () => {
    const { getByTestId } = getTitle('medium');
    expect(getByTestId('h3')).toBeInTheDocument();
  });
  it('title should be large size', () => {
    const { getByTestId } = getTitle('large');
    expect(getByTestId('h2')).toBeInTheDocument();
  });
  it('title should be ultraLarge size', () => {
    const { getByTestId } = getTitle('ultraLarge');
    expect(getByTestId('h1')).toBeInTheDocument();
  });
  it('fontWeight should be 700', () => {
    const { getByTestId } = getTitle('ultraLarge');
    expect(getByTestId('h1')).toHaveStyle({
      fontWeight: 700,
    });
  });
  it('fontWeight should be 700', () => {
    const { getByTestId } = getTitle('ultraLarge');
    expect(getByTestId('h1')).toHaveStyle({
      fontSize: 60,
    });
  });
  it('color should be black', () => {
    const { getByTestId } = getTitle('ultraLarge', '#000');
    expect(getByTestId('text-wrapper')).toHaveStyle({
      color: '#000',
    });
  });
  it('font color should be primary color', () => {
    const { getByTestId } = getTitle('ultraLarge', '', 'primary');
    expect(getByTestId('text-wrapper')).toHaveStyle({
      color: '#072832',
    });
  });
  it('fontWeight should be secondary color', () => {
    const { getByTestId } = getTitle('ultraLarge', '', 'secondary');
    expect(getByTestId('text-wrapper')).toHaveStyle({
      color: '#fff',
    });
  });
  it('fontWeight should be default color', () => {
    const { getByTestId } = getTitle('ultraLarge', '', 'default');
    expect(getByTestId('text-wrapper')).toHaveStyle({
      color: '#8C8C8C',
    });
  });
});
