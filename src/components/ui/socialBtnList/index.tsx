import { FC } from 'react';
import { IconType } from 'utils/socialIcons';
import SocialItem from './SocialItem';
import { IconContainer } from './styles';
type Iconstype = {
 icons: IconType[];
};

const SocialBtnList: FC<Iconstype> = ({ icons }) => {
 return (
  <IconContainer>
   {icons.map((icon) => (
    <SocialItem key={icon.id} icon={icon} />
   ))}
  </IconContainer>
 );
};

export default SocialBtnList;
