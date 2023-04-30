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
export const ImageBox = styled.div`
 position: relative;
 transition: ${(p) => p.theme.transition};

 :hover,
 :focus-visible {
  transform: scale(1.03);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
 }
`;

export const Overlay = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 display: grid;
 place-content: center;
 opacity: 0;
 transition: ${({ theme }) => theme.transition};

 :hover {
  opacity: 1;
  background-color: rgba(4, 4, 4, 0.5);
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
