import React from 'react';
import { ButtonProps } from './buttonTypes';
import { ButtonContent, ButtonTag, ContentWrap, LabelWrap } from './Elements';

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = (
  {
    paddingHorizontal = 10,
    paddingVertical = 10,
    variant = 'default',
    startIcon,
    endIcon,
    label,
    fontSize = 14,
    shadow = false,
    height = 40,
    width = 40,
    disabled = false,
    fullWidth = false,
    onClick,
    borderRadius = '3px',
    customBgColor,
    customFontColor,
    iconColor,
    tag = false,
    accurateValues = false,
  },
  ...props
) => {
  return (
    <div>
      <ButtonTag
        onClick={onClick}
        height={height}
        customBgColor={customBgColor}
        customFontColor={customFontColor}
        width={width}
        fontSize={fontSize}
        paddingHorizontal={paddingHorizontal}
        paddingVertical={paddingVertical}
        variant={variant}
        shadow={shadow}
        disabled={disabled}
        fullWidth={fullWidth}
        borderRadius={borderRadius}
        accurateValues={accurateValues}
        {...props}>
        {tag ? (
          <ButtonContent>
            <ContentWrap data-testid="icon-wrapper" iconColor={iconColor}>
              {' '}
              {startIcon}{' '}
            </ContentWrap>
          </ButtonContent>
        ) : startIcon || endIcon ? (
          <ButtonContent>
            <ContentWrap iconColor={iconColor} data-testid="startIcon">
              {startIcon}
            </ContentWrap>
            <LabelWrap>{label}</LabelWrap>
            <ContentWrap iconColor={iconColor} data-testid="endIcon">
              {endIcon}
            </ContentWrap>
          </ButtonContent>
        ) : (
          <ButtonContent>
            <LabelWrap data-testid="labelTest">{label} </LabelWrap>
          </ButtonContent>
        )}
      </ButtonTag>
    </div>
  );
};
