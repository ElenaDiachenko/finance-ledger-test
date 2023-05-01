import { constants } from 'utils';
import { StyledMenu, MenuLink } from './styles';
import { useWindowResize } from 'hooks';

const Navigation = () => {
 const { width } = useWindowResize();
 return (
  <StyledMenu>
   {constants.navLinks.map((item) => {
    return (
     <li key={item.path}>
      <MenuLink to={item.path} smooth={true} offset={width < 769 ? -120 : -70}>
       {item.title}
      </MenuLink>
     </li>
    );
   })}
  </StyledMenu>
 );
};

export default Navigation;
