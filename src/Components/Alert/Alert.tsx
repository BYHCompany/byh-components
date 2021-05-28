import React from 'react';
import { AlertTypes } from './AlertTypes';
import { IoCheckmarkDone } from 'react-icons/io5';
import { AlertTextWrapper, AlertWrapper } from './Elements';
import { BsExclamationTriangleFill, BsFillExclamationCircleFill } from 'react-icons/bs';

export const Alert: React.FC<AlertTypes> = ({
  variant,
  fontSize = 18,
  height = 60,
  message,
  width = 650,
  padding = 20,
  customIcon,
}) => {
  return (
    <AlertWrapper
      data-testid="alertWrapper"
      padding={padding}
      variant={variant}
      height={height}
      width={width}>
      <AlertTextWrapper fontSize={fontSize}>
        {message}
        {(customIcon
          ? customIcon
          : variant === 'success' && <IoCheckmarkDone data-testid="done" />) ||
          (variant === 'warning' && <BsExclamationTriangleFill data-testid="warning" />) ||
          (variant === 'danger' && <BsFillExclamationCircleFill data-testid="danger" />)}
      </AlertTextWrapper>
    </AlertWrapper>
  );
};
