import { FC } from 'react';
import styled from 'styled-components';
import sprite from 'assets/images/sprite.svg';

type IconProps = {
 name: string;
 width: number;
 height: number;
 className?: string;
};

const Icon: FC<IconProps> = ({ name, width, height, className }) => {
 return (
  <StyledIcon width={width} height={height} className={className}>
   <use href={`${sprite}#${name}`} />
  </StyledIcon>
 );
};

const StyledIcon = styled.svg`
 fill: currentColor;
`;

export default Icon;
