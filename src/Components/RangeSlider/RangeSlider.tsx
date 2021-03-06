import React, { ChangeEvent } from 'react';
import './rangeSlider.css';
import { RangeSliderProps } from './rangeSliderType';

export const RangeSlider: React.FC<RangeSliderProps> = ({
  min = 0,
  max = 1000,
  width = 200,
  callback,
  ...props
}) => {
  const [minVal, setMinVal] = React.useState(min);
  const [maxVal, setMaxVal] = React.useState(max);
  const minValRef = React.useRef(min);
  const maxValRef = React.useRef(max);
  const range = React.useRef<HTMLDivElement>(null);

  const getPercent = React.useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  React.useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  React.useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  callback && callback(minVal, maxVal);

  return (
    <div {...props} style={{ width: width }}>
      <input
        data-testid="input-range-min"
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        //@ts-ignore
        style={{ zIndex: minVal > max - 100 && '5', width: width }}
      />
      <input
        type="range"
        data-testid="input-range-max"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
        style={{ width: width }}
      />

      <div className="slider" data-testid="slider" style={{ width: width }}>
        <div data-testid="slider__track" className="slider__track"></div>
        <div data-testid="slider__range" ref={range} className="slider__range"></div>
      </div>
    </div>
  );
};
