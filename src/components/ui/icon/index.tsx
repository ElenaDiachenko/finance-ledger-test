import { FC } from 'react';
import styled from 'styled-components';
import sprite from 'assets/images/sprite.svg';

type IconProps = {
 name: string;
 width: number;
 height: number;
};

const Icon: FC<IconProps> = ({ name, width, height }) => {
 return (
  <StyledIcon width={width} height={height}>
   <use href={`${sprite}#${name}`} />
  </StyledIcon>
 );
};

const StyledIcon = styled.svg`
 fill: currentColor;
`;

export default Icon;
