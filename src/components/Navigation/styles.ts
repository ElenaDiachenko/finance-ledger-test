import styled from 'styled-components';

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
