import styled from 'styled-components';

export const Section = styled.section`
 color: ${({ theme }) => theme.colors.text};
 padding: 56px 0 40px;

 @media ${({ theme }) => theme.device.tablet} {
  padding: 48px 0 40px;
 }
 @media ${({ theme }) => theme.device.desktop} {
  padding: 80px 0 86px;
 }
`;

export const ContentBox = styled.div`
 text-align: center;
 margin-bottom: 30px;
`;

export const SubTitle = styled.p`
 margin-bottom: 16px;
`;

export const Desc = styled.p`
 margin-top: 24px;
`;
