import { constants } from 'utils';
import { StyledMenu, MenuLink } from './styles';

const Navigation = () => {
 return (
  <StyledMenu>
   {constants.navLinks.map((item) => {
    return (
     <li key={item.path}>
      <MenuLink to={item.path} smooth={true}>
       {item.title}
      </MenuLink>
     </li>
    );
   })}
  </StyledMenu>
 );
};

export default Navigation;
