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
 display: grid;
 align-items: center;
 height: 120px;

 &.active {
  background: ${({ theme }) => theme.colors.footer};
 }

 @media ${({ theme }) => theme.device.tablet} {
  height: 70px;
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
