import styled from 'styled-components';
import { ddProps, dlProps } from './descriptionListType';

export const StyleDL = styled.dl<dlProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ width }) => `${width}px`};
  font-size: ${({ fontSize }) => `${fontSize}px`};
`;
export const StyleDD = styled.dd<ddProps>`
  color: #000000;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const StyleDT = styled.dt`
  color: #929292;
  font-weight: regular;
`;
export const ShowDD = styled.dd`
  text-decoration: underline;
  color: #072832;
  cursor: pointer;
  font-weight: 700;
`;
