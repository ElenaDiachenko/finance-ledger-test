import { LogoBox, Span } from './styles';
import { Icon } from 'components/ui';

const Logo = () => {
 return (
  <LogoBox to={'home'} smooth={true}>
   <Icon name={'logo'} width={40} height={35} />
   <span>
    Finance
    <Span> Ledger</Span>
   </span>
  </LogoBox>
 );
};

export default Logo;
