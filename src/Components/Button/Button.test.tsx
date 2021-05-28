import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
import '@testing-library/jest-dom/extend-expect';
import { BsFillHouseDoorFill } from 'react-icons/bs';

describe('Button', () => {
  const getButton = (onClick?: jest.Mock<any, any>, tag?: boolean) => {
    return render(
      <Button
        tag={tag}
        startIcon={<BsFillHouseDoorFill />}
        onClick={onClick && onClick}
        variant={'primary'}
        label={'Hello'}
      />,
    );
  };

  it('name of button should be Hello', () => {
    const { getByText } = getButton();
    expect(getByText('Hello')).toBeInTheDocument();
  });
  it('button should be exist in the document', () => {
    const { getByRole } = getButton();
    expect(getByRole('button')).toBeInTheDocument();
  });
  it('onClick event should be called ', () => {
    const onClick = jest.fn();
    const { getByRole } = getButton(onClick);
    const button = getByRole('button');
    userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('should be rendered startIcon on button', () => {
    const { getByTestId } = getButton();
    const startIcon = getByTestId('startIcon');
    expect(startIcon).toBeInTheDocument();
  });
  it('should be rendered endIcon on button', () => {
    const { getByTestId } = getButton();
    const endIcon = getByTestId('endIcon');
    expect(endIcon).toBeInTheDocument();
  });
  it('tag is true, label shouldn"t display ', () => {
    const onClick = jest.fn();
    const { getByTestId } = getButton(onClick, true);
    const icon = getByTestId('icon-wrapper');
    expect(icon).toBeInTheDocument();
  });
});
