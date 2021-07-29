import React, { useState } from 'react';
import { ArrowIcon, ListItem, ListItemWrap } from './ListElement';
import { ListContent, ListProps } from './listType';

export const List: React.FC<ListProps> = ({
  list,
  callback,
  fontSize = 30,
  distanceBetweenLi = 10,
  ...props
}) => {
  const [clicked, setClicked] = useState<number>();
  const onClick = (item: ListContent) => {
    setClicked(item.id);
    callback && callback(item);
  };
  let fontWeight: number = 400;

  return (
    <ul {...props}>
      {list.map((item) => (
        <ListItemWrap data-testid={'list-wrapper'} fontSize={fontSize} key={item.id.toString()}>
          <ListItem
            distanceBetweenLi={distanceBetweenLi}
            data-testid={'list'}
            fontWeight={clicked === item.id ? (fontWeight = 900) : (fontWeight = 400)}
            onClick={() => onClick(item)}>
            {item.name}
          </ListItem>
          {clicked === item.id ? <ArrowIcon fontSize={fontSize} data-testid={'icon'} /> : null}
        </ListItemWrap>
      ))}
    </ul>
  );
};
