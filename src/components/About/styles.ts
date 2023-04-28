import styled from 'styled-components';

export const Section = styled.section`
 margin: 0 auto;
 @media ${({ theme }) => theme.device.tablet} {
  display: grid;
  grid-template-columns: 1fr 1fr;
 }
`;

export const ContentBox = styled.div`
 color: ${({ theme }) => theme.colors.white};
 padding: 79px 20px;

 @media ${({ theme }) => theme.device.tablet} {
  padding: 62px 32px;
 }
 @media ${({ theme }) => theme.device.desktop} {
  padding: 80px 28px 86px 20px;
 }
`;

export const SubTitle = styled.p`
 margin-bottom: 16px;
`;

export const Desc = styled.p`
 margin-top: 24px;
 margin-bottom: 24px;
`;
