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

export const NavigateButton = styled.div`
 opacity: 0;
 &:hover {
  opacity: 1;
  padding-top: calc(100vh / 6);
  padding-bottom: calc(100vh / 6);
 }
`;

export const StyledNext = styled(NavigateButton)`
 padding-left: calc(100vw / 4);
`;

export const StyledPrev = styled(NavigateButton)`
 padding-right: calc(100vw / 4);
`;
