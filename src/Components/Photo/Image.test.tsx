import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ImageComponent } from './Image';

describe('Image', () => {
  const ImageTest = (args: { height?: number; width?: number }) => {
    const img =
      'https://images.unsplash.com/photo-1621570359159-72e496ab7d7b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80';
    return render(<ImageComponent {...args} src={img} />);
  };
  const getImage = (args: { height?: number; width?: number }) => {
    const { getByTestId } = ImageTest({ ...args });
    const image = getByTestId('imgDiv');
    return image;
  };

  it('image should render in the document', () => {
    const image = getImage({ height: 100, width: 100 });
    expect(image).toBeInTheDocument();
  });
  it('height of image should be custom height', () => {
    const image = getImage({ height: 500, width: 100 });
    expect(image).toHaveStyle({
      height: '500px',
    });
  });
  it('width of image should be with custom width', () => {
    const image = getImage({ height: 100, width: 300 });
    expect(image).toHaveStyle({
      width: '300px',
    });
  });
  it('width of image should be with default width', () => {
    const image = getImage({});
    expect(image).toHaveStyle({ width: '300px' });
  });
  it('width of image should be with default width', () => {
    const image = getImage({});
    expect(image).toHaveStyle({ height: '300px' });
  });
});
