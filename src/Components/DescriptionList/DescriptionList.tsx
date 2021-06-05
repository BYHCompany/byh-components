import React from 'react';
import { ItemWrapper, ShowDD, StyleDD, StyleDL, StyleDT } from './DescriptionListElements';
import { DescriptionListProps } from './descriptionListType';

export const DescriptionList: React.FC<DescriptionListProps> = ({
  fontSize = 24,
  width = 500,
  obj,
  hide = false,
  handleHide,
}) => {
  // const key = Object.keys(obj);
  // const value = Object.values(obj);
  const arr: React.ReactNode[] = [];

  for (const [key, value] of Object.entries(obj)) {
    arr.push(
      <ItemWrapper data-testid="item-wrapper">
        <StyleDT style={{ marginRight: 30 }}>{key}</StyleDT>
        {/* @ts-ignore */}
        {hide ? <ShowDD onClick={handleHide}>Показать</ShowDD> : <StyleDD>{value}</StyleDD>}
      </ItemWrapper>,
    );
  }

  return (
    <StyleDL data-testid="styleDl" width={width} fontSize={fontSize}>
      {arr}
    </StyleDL>
  );
};
