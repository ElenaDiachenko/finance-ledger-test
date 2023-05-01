import styled from 'styled-components';

export const StyledGallery = styled.ul`
 display: grid;
 grid-gap: 8px;

 grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
 grid-template-rows: repeat(2, auto);

 @media ${({ theme }) => theme.device.tablet} {
  grid-gap: 18px;
 }
`;

export const Item = styled.li`
 @media ${({ theme }) => theme.device.tablet} {
  & :hover {
   cursor: pointer;
  }
 }
`;
