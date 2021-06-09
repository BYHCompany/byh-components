import React from 'react';
import { InputArea, InputField, InputContent, IconWrapper } from './Elements';
import { InputProps } from './inputTypes';

export const Input: React.FC<InputProps> = ({
  variant = 'default',
  placeholder = '',
  width = 280,
  height = 40,
  opacity = 1,
  paddingsHorizontal = 10,
  fontSize = 14,
  startIcon = null,
  endIcon = null,
  isIconWrapperTransparent = false,
  fullwidth = false,
  className,
  ...props
}): React.ReactElement => {
  return (
    <InputArea
      className={className}
      fullwidth={fullwidth}
      variant={variant}
      width={width}
      opacity={opacity}
      height={height}
      data-testid="inputArea">
      {startIcon || endIcon ? (
        <>
          {startIcon && (
            <IconWrapper
              data-testid="iconWrapper"
              isIconWrapperTransparent={isIconWrapperTransparent}
              isOnStart
              height={height}>
              {startIcon}
            </IconWrapper>
          )}
          <InputContent paddingsHorizontal={paddingsHorizontal}>
            <InputField
              fullwidth={fullwidth}
              variant={variant}
              height={height}
              paddingsHorizontal={paddingsHorizontal}
              width={width}
              placeholder={placeholder}
              fontSize={fontSize}
              {...props}
            />
          </InputContent>
          {endIcon && (
            <IconWrapper
              data-testid="iconWrapper"
              isIconWrapperTransparent={isIconWrapperTransparent}
              isOnStart={false}
              height={height}>
              {endIcon}
            </IconWrapper>
          )}
        </>
      ) : (
        <InputContent paddingsHorizontal={paddingsHorizontal}>
          <InputField
            fullwidth={fullwidth}
            variant={variant}
            paddingsHorizontal={paddingsHorizontal}
            height={height}
            width={width}
            placeholder={placeholder}
            fontSize={fontSize}
            {...props}
          />
        </InputContent>
      )}
    </InputArea>
  );
};
