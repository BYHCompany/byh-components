import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ButtonGroup } from './ButtonGroup';
import '@testing-library/jest-dom/extend-expect';
import { buttonDif } from './buttonGroupType';

describe('ButtonGroup', () => {
  const buttons = [
    { label: 'Левый', value: 'left', id: 'aklsadadsxx' },
    { label: 'Правый', value: 'right', id: 'akldmcc' },
  ];

  const callback = (value: buttonDif) => {
    return value;
  };

  const ButtonGroupComponent = () => {
    return render(
      <ButtonGroup buttons={buttons} callback={callback} fontSize={24} height={50} width={500} />,
    );
  };
  const getButton = (elem: number) => {
    const { getAllByRole } = ButtonGroupComponent();
    const button = getAllByRole('button');
    return button[elem];
  };

  it('ButtonGroup should be rendered in the Document', () => {
    expect(getButton(0)).toBeInTheDocument();
    expect(getButton(1)).toBeInTheDocument();
  });
  it('after click Button should change color to #072832 ', () => {
    userEvent.click(getButton(0));
    expect(getButton(0)).toHaveStyle({
      background: '#072832',
    });
  });
  it('first element should have border-radius 3px 0 0 3px ', () => {
    expect(getButton(0)).toHaveStyle({
      borderRadius: '3px 0 0 3px',
    });
  });
  it('last element should have border-radius 0 3px 3px 0 ', () => {
    expect(getButton(1)).toHaveStyle({
      borderRadius: '0 3px 3px 0',
    });
  });
  it('height of ButtonGroup should be 50px ', () => {
    const { getByTestId } = ButtonGroupComponent();
    expect(getByTestId('buttonGroupWrapper')).toHaveStyle({
      maxHeight: '50px',
    });
  });
  it('width of ButtonGroup should be 500px ', () => {
    const { getByTestId } = ButtonGroupComponent();
    expect(getByTestId('buttonGroupWrapper')).toHaveStyle({
      maxWidth: '500px',
    });
  });
});
