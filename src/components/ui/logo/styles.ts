import styled from 'styled-components';
import { Link } from 'react-scroll';

export const LogoBox = styled(Link)`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 8px;
 font-size: 28px;
 color: ${({ theme }) => theme.colors.accent};
 transition: ${({ theme }) => theme.transition};

 @media ${({ theme }) => theme.device.tablet} {
  font-size: ${({ theme }) => theme.fontSizes.l};
  gap: 10px;
 }

 :hover,
 :focus-visible {
  transform: scale(1.03);
 }
`;
export const Icon = styled.svg`
 fill: currentColor;
`;

export const Span = styled.span`
 color: ${({ theme }) => theme.colors.white};
`;
