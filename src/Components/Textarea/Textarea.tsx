import React, { useEffect, useState } from 'react';
import { TextareaInput, TextAreaWrapper } from './Elements';
import { TextareaProps } from './TextareaTypes';

export const Textarea: React.FC<TextareaProps> = ({
  variant = 'default',
  width = 400,
  height = 140,
  padding = 10,
  placeholder,
  placeholderColor = '#8C8C8C',
  value,
  fontSize = 14,
  onInput,
}): React.ReactElement => {
  const [inputHeight, setInputHeight] = useState<number | 'auto'>(height);
  const [inputLength, setInputLength] = useState(0);
  const [inputValue, setInputValue] = useState(value);

  const userInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setInputHeight('auto');
    setInputValue(e.currentTarget.value);
    setInputHeight(e.currentTarget.scrollHeight + 2 * padding);
    setInputLength(e.currentTarget.value.length);
    onInput && onInput(e);
  };

  return (
    <TextAreaWrapper
      inputHeight={inputLength === 0 ? height : inputHeight}
      width={width}
      variant={variant}
      padding={padding}
      data-testid="textAreaWrapper">
      <TextareaInput
        padding={padding}
        fontSize={fontSize}
        value={inputValue}
        inputHeight={inputLength === 0 ? height : inputHeight}
        onInput={(e) => userInput(e)}
        placeholderColor={placeholderColor}
        placeholder={placeholder}
      />
    </TextAreaWrapper>
  );
};
