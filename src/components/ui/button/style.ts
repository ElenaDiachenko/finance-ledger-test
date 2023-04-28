import styled from 'styled-components';
import { Link } from 'react-scroll';
type ButtonProps = {
 className: string;
 variant?: string;
};

export const StyledButton = styled(Link)<ButtonProps>`
 display: flex;
 justify-content: center;
 align-items: center;
 width: max-content;
 gap: 8px;
 padding: 16px 32px;
 border: ${({ theme }) => theme.borders.normal};
 border-radius: ${({ theme }) => theme.radii.sm};

 transition: all ${({ theme }) => theme.cubic};
 &.primary {
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.accent};
  border-color: transparent;
  &:hover {
   background: ${({ theme }) => theme.colors.accentHover};
  }
 }
 &.outline {
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme, variant }) =>
   variant === 'blue' ? theme.colors.bgAccent : theme.colors.accent};
  border-color: ${({ theme }) => theme.colors.white};

  &:hover {
   color: ${({ theme, variant }) =>
    variant === 'blue' ? theme.colors.bgAccent : theme.colors.accent};
   border-color: ${({ theme, variant }) =>
    variant === 'blue' ? theme.colors.bgAccent : theme.colors.accent};
   background: ${({ theme }) => theme.colors.white};
  }
 }
 @media ${({ theme }) => theme.device.tablet} {
 }
`;
