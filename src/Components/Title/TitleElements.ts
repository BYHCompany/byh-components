import styled from 'styled-components';
import { TitleWrapperPros } from './titleType';

export const TextWrapper = styled.div<TitleWrapperPros>`
  color: ${({ variant, customVariantColor }) =>
    (customVariantColor && customVariantColor) ||
    (variant === 'primary' && '#072832') ||
    (variant === 'secondary' && '#fff') ||
    (variant === 'default' && '#8C8C8C')};
`;
