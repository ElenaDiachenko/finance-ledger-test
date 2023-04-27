import { Section, Title, Desc, ContentBox, Icon } from './styles';
import { Button, Container } from 'components/ui';
import sprite from 'assets/images/sprite.svg';

const Hero = () => {
 return (
  <Section id="home">
   <Container>
    <ContentBox>
     <Title>The Sky Is The Limit</Title>
     <Desc>We provide world class financial assistance</Desc>
     <Button to="about" className={'primary'}>
      <Icon width="9" height="18">
       <use href={`${sprite}#arrow`} />
      </Icon>
      Read more
     </Button>
    </ContentBox>
   </Container>
  </Section>
 );
};

export default Hero;
