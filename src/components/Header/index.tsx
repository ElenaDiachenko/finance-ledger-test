import { useState, useEffect } from 'react';

import { Container, Button, Logo } from 'components/ui';
import Navigation from '../Navigation';
import { StyledHeader, StyledNav } from './styles';

const Header = () => {
 const [active, setActive] = useState(false);

 const handleActive = () => {
  window.scrollY > 0 ? setActive(true) : setActive(false);
 };

 useEffect(() => {
  window.addEventListener('scroll', handleActive);
  return () => {
   window.removeEventListener('scroll', handleActive);
  };
 }, []);

 return (
  <StyledHeader className={active ? 'active' : ''}>
   <Container>
    <StyledNav>
     <Logo />
     <Navigation />
    </StyledNav>
   </Container>
  </StyledHeader>
 );
};

export default Header;
