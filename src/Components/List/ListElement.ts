import styled from 'styled-components';
import { ArrowIconProps, ListItemProps, ListItemWrapProps } from './listType';
import { BiCheckDouble } from 'react-icons/bi';

export const ListItemWrap = styled.div<ListItemWrapProps>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  display: flex;
  align-items: center;
`;
export const ListItem = styled.li<ListItemProps>`
  cursor: pointer;
  list-style: none;
  text-decoration: none;
  font-weight: ${({ fontWeight }) => fontWeight};
  margin-right: 20px;
  margin-bottom: ${({ distanceBetweenLi }) => `${distanceBetweenLi}px`}; ;
`;

export const ArrowIcon = styled(BiCheckDouble)<ArrowIconProps>`
  font-size: ${({ fontSize }) => fontSize && `${fontSize + 10}px`};
  display: flex;
`;
