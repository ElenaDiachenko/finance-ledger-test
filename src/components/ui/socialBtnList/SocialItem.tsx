import sprite from 'assets/images/sprite.svg';
import { FC } from 'react';
import { IconType } from 'utils/socialIcons';
import { Icon } from './styles';
type IconProps = {
 icon: IconType;
};

const SocialItem: FC<IconProps> = ({ icon }) => {
 return (
  <li>
   <a href="#" target="_blank" rel="noopener  noreferrer" title={icon.id}>
    <Icon width={icon.width} height={icon.height}>
     <use href={`${sprite}#${icon.id}`}></use>
    </Icon>
   </a>
  </li>
 );
};
export default SocialItem;
