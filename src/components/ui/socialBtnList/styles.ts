import styled from 'styled-components';

type IconProps = {
 hoverColor: string;
};

export const IconContainer = styled.ul`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 25px;
 color: ${({ theme }) => theme.colors.white};
`;

export const Icon = styled.svg<IconProps>`
 fill: currentColor;
 transition: ${({ theme }) => theme.transition};

 &:hover {
  fill: ${({ theme, hoverColor }) => theme.colors[hoverColor]};
 }
`;
