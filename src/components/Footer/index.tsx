import { Container, SocialBtnList } from 'components/ui';
import { socialIcons } from 'utils/socialIcons';

import { StyledFooter } from './styles';

const Footer = () => {
 return (
  <StyledFooter>
   <Container>
    <SocialBtnList icons={socialIcons} hoverColor={'accent'} />
    <p>Copyright &copy; 2022 - FinanceLedge</p>
   </Container>
  </StyledFooter>
 );
};

export default Footer;
