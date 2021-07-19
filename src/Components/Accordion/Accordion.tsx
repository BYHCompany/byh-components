import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Paper } from '../Paper/Paper';
import { Title } from '../Title/Title';
import { AccordionButton, ButtonContentWrapper, TitleWrapper } from './AccordionElements';
import { AccordionProps } from './accordionTypes';

export const Accordion: React.FC<AccordionProps> = ({
  title = 'title',
  children = <h1>Content</h1>,
  width = 770,
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div style={{ width: width }} data-testid="accordion-wrapper">
      <AccordionButton
        data-testid="accordion-button"
        width={width}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}>
        <ButtonContentWrapper>
          <TitleWrapper>
            <Title type="ultraSmall" customVariantColor="#000000">
              {title}
            </Title>
          </TitleWrapper>
          {isOpen ? (
            <IoIosArrowUp style={{ fontSize: 20 }} />
          ) : (
            <IoIosArrowDown style={{ fontSize: 20 }} />
          )}
        </ButtonContentWrapper>
      </AccordionButton>
      {isOpen && (
        <Paper
          boxShadow={false}
          borderRadius={'0 0 3px 3px'}
          customVariantColor={'#E9E9E9'}
          style={{ padding: '15px 10px 15px 30px' }}
          width={width}>
          {children}
        </Paper>
      )}
    </div>
  );
};
