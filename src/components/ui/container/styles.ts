import styled from 'styled-components';

export const StyledContainer = styled.div`
 width: 100%;
 max-width: 767px;
 margin: 0 auto;
 padding: 0 20px;

 @media ${({ theme }) => theme.device.tablet} {
  padding: 0 32px;
  max-width: 1359px;
 }
 @media ${({ theme }) => theme.device.tablet} {
  padding: 0 28px;
  max-width: 1360px;
 }
`;
