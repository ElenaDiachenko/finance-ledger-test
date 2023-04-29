import styled from 'styled-components';

export const StyledList = styled.ul`
 align-items: center;
 margin-bottom: 30px;
 @media ${({ theme }) => theme.device.tablet} {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 18px;
  margin-bottom: 42px;
 }
`;

export const ContentBox = styled.div`
 text-align: center;
 padding-top: 16px;
`;
export const Title = styled.h3`
 margin-bottom: 8px;
 font-size: ${({ theme }) => theme.fontSizes.xs};

 @media ${({ theme }) => theme.device.tablet} {
  font-size: 32px;
  line-height: 1;
 }
`;

export const Description = styled.p`
 @media ${({ theme }) => theme.device.tablet} {
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1;
 }
`;
