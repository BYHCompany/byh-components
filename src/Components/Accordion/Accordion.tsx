import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Paper } from '../Paper/Paper';
import { Title } from '../Title/Title';
import { AccordionButton, ButtonContentWrapper, TitleWrapper } from './AccordionElements';
import { AccordionProps } from './accordionTypes';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
export const Accordion: React.FC<AccordionProps> = ({
  title = 'title',
  children = <h1>Content</h1>,
  width = 770,
  titleSize = 20,
  height = 45,
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <AnimateSharedLayout>
      <motion.div
        initial={{ borderRadius: 3 }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: width, backgroundColor: '#e9e9e9' }}
        data-testid="accordion-wrapper"
        transition={{ duration: 0.1 }}>
        <motion.div layout transition={{ duration: 0.1 }}>
          <AccordionButton
            as={motion.button}
            height={height}
            data-testid="accordion-button"
            width={width}
            isOpen={isOpen}>
            <ButtonContentWrapper as={motion.div} layout>
              <TitleWrapper>
                <h5 style={{ color: '#072832', fontSize: titleSize }}>{title}</h5>
              </TitleWrapper>
              {isOpen ? (
                <IoIosArrowUp style={{ fontSize: 20 }} />
              ) : (
                <IoIosArrowDown style={{ fontSize: 20 }} />
              )}
            </ButtonContentWrapper>
          </AccordionButton>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                layout
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ padding: '15px 10px 15px 30px' }}>
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimateSharedLayout>
  );
};
