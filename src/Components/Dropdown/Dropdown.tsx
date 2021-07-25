import React, { useRef } from 'react';
import { Aside, DIV, Item, LabelDiv, UL } from './Elements';
import { IoIosArrowDown } from 'react-icons/io';
import { DropdownProps } from './DropdownTypes';
import { ItemType } from './DropdownTypes';

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  height = 40,
  width = 280,
  items,
  itemsFontSize = 14,
  labelFontSize = 14,
  padding = 10,
  customBorder = '3px',
  variant = 'default',
  itemsScrollHeight = 300,
  callback,
  ...props
}) => {
  const [visible, setVisible] = React.useState(false);
  const [currentElem, setCurrentElem] = React.useState<string>();
  const [currentItems, setCurrentItems] = React.useState<ItemType[]>(items);
  let i = 0;

  const handleClick = () => setVisible(!visible);

  const itemClick = (item: ItemType) => {
    setCurrentElem(item.label);
    setVisible(false);
    callback && callback(item);
  };

  const autoItemsHeight = height * items.length;

  const dropdownRef = useRef();

  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      // @ts-ignore
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setVisible(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    setCurrentElem('');
    setCurrentItems(items);
  }, [items]);

  return (
    <DIV ref={dropdownRef} {...props} width={width}>
      <LabelDiv
        customBorder={customBorder}
        isItemsVisible={visible}
        variant={variant}
        padding={padding}
        labelFontSize={labelFontSize}
        height={height}
        width={width}
        isDefaultValue={currentElem === label}
        isChosenElem={currentElem ? true : false}
        onClick={handleClick}>
        {currentElem ? currentElem : label}
        <IoIosArrowDown />
      </LabelDiv>
      {visible && (
        <Aside width={width}>
          <UL
            itemsScrollHeight={
              itemsScrollHeight > autoItemsHeight ? autoItemsHeight : itemsScrollHeight
            }>
            {currentItems.map((item: any) => {
              i++;
              return (
                <Item
                  variant={variant}
                  onClick={() => itemClick(item)}
                  value={item.value}
                  padding={padding}
                  itemsFontSize={itemsFontSize}
                  height={height}
                  lastElement={items.length === i}
                  key={item.id}>
                  {item.label}
                </Item>
              );
            })}
          </UL>
        </Aside>
      )}
    </DIV>
  );
};
