import styled from 'styled-components';

export const StyledMenu = styled.ul`
 display: flex;

 align-items: center;
 gap: 12px;
 & > li {
  font-size: ${({ theme }) => theme.fontSizes.xs};
  @media ${({ theme }) => theme.device.tablet} {
   font-size: ${({ theme }) => theme.fontSizes.s};
  }
 }
 @media ${({ theme }) => theme.device.tablet} {
  gap: 20px;
 }
 @media ${({ theme }) => theme.device.dekstop} {
  gap: 40px;
 }
`;
