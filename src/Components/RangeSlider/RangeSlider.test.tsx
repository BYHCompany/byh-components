import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { RangeSlider } from './RangeSlider';

describe('RangeSlider', () => {
  let maxValue: number;
  let minValue: number;
  const callback = (minVal: number, maxVal: number) => {
    maxValue = maxVal;
    minValue = minVal;
  };

  const getSlider = (max?: number, min?: number) => {
    return render(<RangeSlider max={max ? max : 1000} min={min ? min : 0} callback={callback} />);
  };
  it('rangeSlider should be rendered in the document', () => {
    const { getByTestId } = getSlider();
    expect(getByTestId('input-range-min')).toBeInTheDocument();
  });
  it('maxValue from callback should be correct', () => {
    const { getByTestId } = getSlider();
    const input = getByTestId('input-range-min');
    userEvent.click(input);
    expect(maxValue).toBe(1000);
  });
  it('minValue from callback should be correct', () => {
    const { getByTestId } = getSlider();
    const input = getByTestId('input-range-min');
    userEvent.click(input);
    expect(minValue).toBe(0);
  });
  it('after change input.target.value minValue should be correct', () => {
    const { getByTestId } = getSlider();
    const input = getByTestId('input-range-min');
    fireEvent.change(input, { target: { value: 2 } });
    expect(minValue).toBe(2);
  });
  it('after change input.target.value maxValue should be correct', () => {
    const { getByTestId } = getSlider();
    const input = getByTestId('input-range-max');
    fireEvent.change(input, { target: { value: 970 } });
    expect(maxValue).toBe(970);
  });
  it('if minVal > max, zIndex should be 5 ', () => {
    const { getByTestId } = getSlider(1000, 1002);

    const input = getByTestId('input-range-min');
    expect(input).toHaveStyle({
      zIndex: '5',
    });
  });
  it('sliderTrack should be rendered in the document', () => {
    const { getByTestId } = getSlider();

    const sliderTrack = getByTestId('slider__track');
    expect(sliderTrack).toBeInTheDocument();
  });
  it('sliderRange should be rendered in the document ', () => {
    const { getByTestId } = getSlider();

    const sliderRange = getByTestId('slider__range');
    expect(sliderRange).toBeInTheDocument();
  });
});
