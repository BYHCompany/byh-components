import React from 'react';
import { TextWrapper } from './TitleElements';
import { TitleProps } from './titleType';

export const Title: React.FC<TitleProps> = ({
  variant = 'primary',
  text = 'text',
  type = 'small',
  fontWeight = 700,
  customVariantColor,
  ...props
}) => {
  return (
    <TextWrapper
      data-testid="text-wrapper"
      customVariantColor={customVariantColor}
      fontWeight={fontWeight}
      {...props}
      variant={variant}>
      {(type === 'ultraSmall' && (
        <h5 style={{ fontSize: 24, fontWeight: fontWeight }} data-testid="h5">
          {text}
        </h5>
      )) ||
        (type === 'small' && (
          <h4 style={{ fontSize: 30, fontWeight: fontWeight }} data-testid="h4">
            {text}
          </h4>
        )) ||
        (type === 'medium' && (
          <h3 style={{ fontSize: 36, fontWeight: fontWeight }} data-testid="h3">
            {text}
          </h3>
        )) ||
        (type === 'large' && (
          <h2 style={{ fontSize: 48, fontWeight: fontWeight }} data-testid="h2">
            {text}
          </h2>
        )) ||
        (type === 'ultraLarge' && (
          <h1 style={{ fontSize: 60, fontWeight: fontWeight }} data-testid="h1">
            {text}
          </h1>
        ))}
    </TextWrapper>
  );
};
