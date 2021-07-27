import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Paper } from '../Paper/Paper';
import { Title } from '../Title/Title';
import { AccordionButton, ButtonContentWrapper, TitleWrapper } from './AccordionElements';
import { AccordionProps } from './accordionTypes';
import { AnimatePresence, motion } from "framer-motion";
export const Accordion: React.FC<AccordionProps> = ({
  title = "title",
  children = <h1>Content</h1>,
  width = 770,
  titleSize = 20,
  height = 45,
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div style={{ width: width }} data-testid="accordion-wrapper">
      <AccordionButton
        height={height}
        data-testid="accordion-button"
        width={width}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <ButtonContentWrapper>
          <TitleWrapper>
            <h5 style={{ color: "#072832", fontSize: titleSize }}>{title}</h5>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // boxShadow={false}
            // borderRadius={"0 0 3px 3px"}
            // customVariantColor={"#E9E9E9"}
            // width={width}
            style={{ padding: "15px 10px 15px 30px" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
