import { Section, Title, Desc, ContentBox } from './styles';
import { ButtonLink, Container, Icon } from 'components/ui';

const Hero = () => {
 return (
  <Section id="home">
   <Container>
    <ContentBox>
     <Title>The Sky Is The Limit</Title>
     <Desc>We provide world class financial assistance</Desc>
     <ButtonLink to="about" className={'primary'}>
      <Icon name="arrow" width={9} height={18} />
      Read more
     </ButtonLink>
    </ContentBox>
   </Container>
  </Section>
 );
};

export default Hero;
