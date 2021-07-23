import React from 'react';
import { ItemWrapper, ShowDD, StyleDD, StyleDL, StyleDT } from './DescriptionListElements';
import { DescriptionListProps } from './descriptionListType';

export const DescriptionList: React.FC<DescriptionListProps> = ({
  fontSize = 24,
  width = 500,
  description = 'value',
  hide = false,
  handleHide,
  showButtonText = 'Показать',
  header,
  ...props
}) => {
  return (
    <StyleDL {...props} data-testid="styleDl" width={width} fontSize={fontSize}>
      <ItemWrapper data-testid="item-wrapper">
        <StyleDT>{header}</StyleDT>
        {hide ? (
          <ShowDD onClick={handleHide}>{showButtonText}</ShowDD>
        ) : (
          <StyleDD>{description}</StyleDD>
        )}
      </ItemWrapper>
    </StyleDL>
  );
};
