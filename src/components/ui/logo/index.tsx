import sprite from 'assets/images/sprite.svg';
import { LogoBox, Span, Icon } from './styles';

const Logo = () => {
 return (
  <LogoBox to={'home'} smooth={true}>
   <Icon width="40" height="35">
    <use href={`${sprite}#logo`} />
   </Icon>
   <span>
    Finance
    <Span> Ledger</Span>
   </span>
  </LogoBox>
 );
};

export default Logo;
