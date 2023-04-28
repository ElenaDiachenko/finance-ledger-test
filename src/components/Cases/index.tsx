import { Container, SectionTitle, ImageGallery } from 'components/ui';
import { ContentBox, Desc, Section, SubTitle } from './styles';
import { images } from 'utils';
const Cases = () => {
 return (
  <Section>
   <Container>
    <ContentBox>
     <SubTitle>This is what we do</SubTitle>
     <SectionTitle>Business Cases</SectionTitle>
     <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</Desc>
    </ContentBox>
    <ImageGallery images={images} />
   </Container>
  </Section>
 );
};

export default Cases;
