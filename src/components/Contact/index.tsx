import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import { Container, SectionTitle, SectionWithContainer } from 'components/ui';
import { ContentBox, Desc, SubTitle } from './styles';

const Contact = () => {
 return (
  <SectionWithContainer id={'contact'}>
   <Container>
    <ContentBox>
     <SubTitle>Who we are</SubTitle>
     <SectionTitle>Our Professional Team</SectionTitle>
     <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</Desc>
    </ContentBox>
   </Container>
  </SectionWithContainer>
 );
};

export default Contact;
