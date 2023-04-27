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
 padding: 14px 0;
 height: 120px;

 &.active {
  background: ${({ theme }) => theme.colors.bgAccent};
 }
 @media ${({ theme }) => theme.device.tablet} {
  padding: 14px 0;
  height: 82px;
 }
 @media ${({ theme }) => theme.device.dekstop} {
  height: 70px;
 }
`;

export const StyledNav = styled.nav`
 @media ${({ theme }) => theme.device.tablet} {
  display: flex;
  justify-content: space-between;
  align-items: center;
 }
`;
