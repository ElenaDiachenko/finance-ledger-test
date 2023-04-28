import styled from 'styled-components';

export const StyledTitle = styled.h2`
 font-size: 32px;
 color: inherit;

 @media ${({ theme }) => theme.device.tablet} {
  font-size: ${({ theme }) => theme.fontSizes.xl};
 }
`;
