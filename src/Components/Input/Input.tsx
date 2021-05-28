import React, { useState } from 'react';
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
  value,
  fullwidth = false,
  callback,
  inputFieldProps,
  inputBlockProps,
}): React.ReactElement => {
  const [inputValue, setInputValue] = useState<string>(value ? value : '');

  const change = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
    callback && callback(e);
  };

  return (
    <InputArea
      fullwidth={fullwidth}
      variant={variant}
      width={width}
      opacity={opacity}
      height={height}
      data-testid="inputArea"
      {...inputBlockProps}>
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
              onChange={change}
              value={inputValue}
              variant={variant}
              height={height}
              paddingsHorizontal={paddingsHorizontal}
              width={width}
              placeholder={placeholder}
              fontSize={fontSize}
              {...inputFieldProps}
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
            onChange={change}
            value={value}
            variant={variant}
            paddingsHorizontal={paddingsHorizontal}
            height={height}
            width={width}
            placeholder={placeholder}
            fontSize={fontSize}
          />
        </InputContent>
      )}
    </InputArea>
  );
};
