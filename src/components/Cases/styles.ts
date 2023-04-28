import styled from 'styled-components';

export const Section = styled.section`
 color: ${({ theme }) => theme.colors.text};
 padding: 56px 20px 40px;

 @media ${({ theme }) => theme.device.tablet} {
  padding: 48px 20px 40px;
 }
 @media ${({ theme }) => theme.device.desktop} {
  padding: 80px 20px 86px;
 }
`;

export const ContentBox = styled.div`
 text-align: center;
`;

export const SubTitle = styled.p`
 margin-bottom: 16px;
`;

export const Desc = styled.p`
 margin-top: 24px;
 margin-bottom: 30px;
`;
