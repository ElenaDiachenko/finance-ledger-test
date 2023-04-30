import styled from 'styled-components';
import { Link } from 'react-scroll';

export const StyledMenu = styled.ul`
 display: flex;
 align-items: center;
 gap: 12px;

 @media ${({ theme }) => theme.device.tablet} {
  gap: 20px;
 }

 @media ${({ theme }) => theme.device.desktop} {
  gap: 40px;
 }

 & > li {
  font-size: ${({ theme }) => theme.fontSizes.xs};

  @media ${({ theme }) => theme.device.tablet} {
   font-size: ${({ theme }) => theme.fontSizes.s};
  }
 }
`;

export const MenuLink = styled(Link)`
 position: relative;
 :hover,
 :focus-visible {
  outline: none;

  ::after {
   content: '';
   position: absolute;
   left: 0;
   bottom: -6px;
   width: 100%;
   height: 2px;
   background: ${({ theme }) => theme.colors.accent};
  }
 }
`;
