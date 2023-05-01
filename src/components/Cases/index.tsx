import { useState, useRef } from 'react';
import Lightbox, { ControllerRef} from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import { Container, SectionTitle, ImageGallery, SectionWithContainer } from 'components/ui';
import { ContentBox, Desc, SubTitle, StyledPrev, StyledNext } from './styles';
import { images, slides } from 'utils';
import next from 'assets/images/gallery/next.png';
import prev from 'assets/images/gallery/prev.png';
import close from 'assets/images/gallery/close.png';
import loading from 'assets/images/gallery/loading.gif';

const Cases = () => {
 const [index, setIndex] = useState(-1);
 const [open, setOpen] = useState(false);
 const ref = useRef<ControllerRef>(null);

 const prevIcon = () => (
  <StyledPrev>
   <img src={prev} alt="" width={38} height={66} />
  </StyledPrev>
 );
 const nextIcon = () => (
  <StyledNext>
   <img src={next} alt="" width={38} height={66} />
  </StyledNext>
 );
 const closeIcon = () => <img src={close} alt="" />;
 const loadingIcon = () => <img src={loading} alt="" />;

 const handleLitebox = (idx: number) => {
  setIndex(idx);
  setOpen(true);
 };

 return (
  <SectionWithContainer id={'cases'}>
   <Container>
    <ContentBox>
     <SubTitle>This is what we do</SubTitle>
     <SectionTitle>Business Cases</SectionTitle>
     <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</Desc>
    </ContentBox>
    <ImageGallery images={images} handleLitebox={handleLitebox} />
    <Lightbox
     plugins={[Captions]}
     controller={{ ref, closeOnBackdropClick: true }}
     on={{
      click: () => {
       ref.current?.close();
      },
     }}
     slides={slides}
     open={open}
     index={index}
     close={() => setOpen(false)}
     captions={{ descriptionTextAlign: 'center', descriptionMaxLines: 1 }}
     styles={{
      container: {
       backgroundColor: 'rgba(0, 0, 0, .7)',
      },
      captionsDescriptionContainer: { backgroundColor: 'rgba(0, 0, 0, .7' },
     }}
     render={{
      iconPrev: prevIcon,
      iconNext: nextIcon,
      iconClose: closeIcon,
      iconLoading: loadingIcon,
     }}
    />
   </Container>
  </SectionWithContainer>
 );
};

export default Cases;
