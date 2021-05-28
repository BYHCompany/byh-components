import React, { useEffect, useState } from 'react';
import { IoCheckmarkDone } from 'react-icons/io5';
import { Button } from '../Button/Button';
import { StepperWrapper } from './Elements';
import { StepperProps } from './StepperTypes';

export const Stepper: React.FC<StepperProps> = ({
  allElements,
  doneElements,
  callback,
  maxWidth = 600,
  customStepBorderRadius = '3px',
  fullWidth = false,
  distanceBetweenSteps = 10,
}): React.ReactElement => {
  let allValues: string[] = [];
  let doneValues: string[] = [];
  const [indexes, setIndexes] = useState<number[]>([]);

  const height = (maxWidth - distanceBetweenSteps * (allElements.length - 1)) / allElements.length;

  let j = -1;

  const getAllValues = () => {
    allElements.forEach((item) => {
      allValues.push(item.id);
    });
  };
  const getDoneValues = () => {
    doneElements.forEach((item) => {
      doneValues.push(item.id);
    });
  };

  const setArrayIndexes = () => {
    const arr: number[] = [];
    allValues.forEach((item) => {
      debugger;
      //@ts-ignore
      arr.push(allValues.indexOf(doneValues.find((elem) => item === elem)));
    });
    setIndexes(arr);
  };

  useEffect(() => {
    getAllValues();
    getDoneValues();
    setArrayIndexes();
  }, []);

  return (
    <StepperWrapper data-testid="stepperWrapper" fullWidth={fullWidth} maxWidth={maxWidth}>
      {allElements.map((elem) => {
        j++;
        return (
          <Button
            tag={true}
            label=""
            key={elem.id}
            variant="secondary"
            fontSize={26}
            accurateValues={true}
            height={height}
            width={height}
            paddingHorizontal={15}
            paddingVertical={15}
            borderRadius={customStepBorderRadius}
            onClick={() => callback(elem)}
            customFontColor="#072832"
            customBgColor={indexes[j] > -1 ? '#4FFFAA' : '#EBEBEB'}
            startIcon={
              indexes[j] > -1 ? <IoCheckmarkDone key={elem.id + 'filtered'} /> : <React.Fragment />
            }
          />
        );
      })}
    </StepperWrapper>
  );
};
