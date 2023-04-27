import { Link } from 'react-scroll';
import { constants } from 'utils';
import { StyledMenu } from './styles';

const Navigation = () => {
 return (
  <StyledMenu>
   {constants.navLinks.map((item) => {
    return (
     <li key={item.path}>
      <Link to={item.path} smooth={true}>
       {item.title}
      </Link>
     </li>
    );
   })}
  </StyledMenu>
 );
};

export default Navigation;
