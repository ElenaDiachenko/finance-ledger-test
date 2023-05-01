import { FC } from 'react';
import { IconType } from 'utils/socialIcons';
import SocialItem from './SocialItem';
import { IconContainer } from './styles';
type Iconstype = {
 icons: IconType[];
 hoverColor: string;
};

const SocialBtnList: FC<Iconstype> = ({ icons, hoverColor }) => {
 return (
  <IconContainer>
   {icons.map((icon) => (
    <SocialItem key={icon.id} icon={icon} hoverColor={hoverColor} />
   ))}
  </IconContainer>
 );
};

export default SocialBtnList;
