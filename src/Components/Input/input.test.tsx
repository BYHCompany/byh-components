import '@testing-library/jest-dom/extend-expect';
import { Input } from './Input';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AiFillHome } from 'react-icons/ai';

const value = 'some value';

const RenderInput = (args?: any) => {
  return render(<Input {...args} onChange={() => {}} value={value} />);
};
describe('Input', () => {
  it('should display input component', () => {
    const { getByRole } = RenderInput({ fullwidth: true });
    expect(getByRole('textbox')).toHaveStyle({ width: '100%' });
  });
  it('input shows right placeholder', () => {
    const { getByPlaceholderText } = RenderInput({ placeholder: 'Please input value' });
    expect(getByPlaceholderText('Please input value')).toBeInTheDocument();
  });
  it('input shows right value from user', () => {
    const { getByPlaceholderText } = RenderInput({ placeholder: 'Please input value' });
    userEvent.type(getByPlaceholderText('Please input value'), value);
    const filledInput = screen.getByDisplayValue(value);
    expect(filledInput).toBeInTheDocument();
  });
  it('input shows be fullwidth', () => {
    const { getByPlaceholderText } = RenderInput({ placeholder: 'Please input value' });
    expect(getByPlaceholderText('Please input value')).toBeInTheDocument();
  });
  it('should display right primary background color', () => {
    const { getByTestId } = RenderInput({ fullwidth: true, variant: 'primary' });
    expect(getByTestId('inputArea')).toHaveStyle({ backgroundColor: '#EBEBEB' });
  });
  it('should display right default background color', () => {
    const { getByTestId } = RenderInput({ fullwidth: true, variant: 'secondary' });
    expect(getByTestId('inputArea')).toHaveStyle({ backgroundColor: 'rgba(255, 255, 255, 0.5)' });
  });
  it('should display right icon wrapper height', () => {
    const { getAllByTestId } = RenderInput({
      fullwidth: true,
      variant: 'primary',
      height: 40,
      startIcon: <AiFillHome />,
    });
    expect(getAllByTestId('iconWrapper')[0]).toHaveStyle({ height: '40px' });
  });
  it('should display transparent icon wrapper', () => {
    const { getAllByTestId } = RenderInput({
      fullwidth: true,
      variant: 'primary',
      height: 40,
      isIconWrapperTransparent: true,
      startIcon: <AiFillHome />,
    });
    expect(getAllByTestId('iconWrapper')[0]).toHaveStyle({ backgroundColor: 'transparent' });
  });
  it('should display right start icon wrapper border radius', () => {
    const { getAllByTestId } = RenderInput({
      fullwidth: true,
      variant: 'primary',
      height: 40,
      isIconWrapperTransparent: true,
      startIcon: <AiFillHome />,
    });
    expect(getAllByTestId('iconWrapper')[0]).toHaveStyle({ borderRadius: '3px 0 0 3px' });
  });
  it('should display right end icon wrapper border radius', () => {
    const { getAllByTestId } = RenderInput({
      fullwidth: true,
      variant: 'primary',
      height: 40,
      isIconWrapperTransparent: true,
      endIcon: <AiFillHome />,
    });
    expect(getAllByTestId('iconWrapper')[0]).toHaveStyle({ borderRadius: '0 3px 3px 0' });
  });
});
