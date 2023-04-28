import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import { Container, SectionTitle, ImageGallery } from 'components/ui';
import { ContentBox, Desc, Section, SubTitle } from './styles';
import { images, slides } from 'utils';

const Cases = () => {
 const [index, setIndex] = useState(-1);
 const [open, setOpen] = useState(false);

 const handleLitebox = (idx: number) => {
  setIndex(idx);
  setOpen(true);
 };
 console.log(index);
 return (
  <Section>
   <Container>
    <ContentBox>
     <SubTitle>This is what we do</SubTitle>
     <SectionTitle>Business Cases</SectionTitle>
     <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</Desc>
    </ContentBox>
    <ImageGallery images={images} handleLitebox={handleLitebox} />
    <Lightbox
     plugins={[Captions]}
     slides={slides}
     open={open}
     close={() => setOpen(false)}
     captions={{ descriptionTextAlign: 'center', descriptionMaxLines: 1 }}
     styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .7)' } }}
    />
   </Container>
  </Section>
 );
};

export default Cases;
