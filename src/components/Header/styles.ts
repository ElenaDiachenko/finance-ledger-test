import styled from 'styled-components';

type HeaderProps = {
 className: string;
};

export const StyledHeader = styled.header<HeaderProps>`
 position: fixed;
 top: 0;
 width: 100%;
 z-index: 100;
 transition: all ${({ theme }) => theme.cubic};
 background: transparent;
 padding: 22px 0;

 &.active {
  background: ${({ theme }) => theme.colors.text};
 }
 @media ${({ theme }) => theme.device.tablet} {
  padding: 23px 0;
 }
 @media ${({ theme }) => theme.device.desktop} {
  padding: 32px 0;
 }
`;

export const StyledNav = styled.nav`
 display: flex;
 flex-direction: column;
 gap: 16px;
 align-items: center;

 @media ${({ theme }) => theme.device.tablet} {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 }
`;
