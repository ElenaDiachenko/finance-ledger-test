import { ResponsiveImage, FullSizeSection, SectionTitle } from 'components/ui';
import Form from '../Form';
import img from 'assets/images/home/contact.jpg';
import webp from 'assets/images/home/contact.webp';
import img2x from 'assets/images/home/contact@2x.jpg';
import webp2x from 'assets/images/home/contact@2x.webp';
import { ContentBox } from './styles';

const Contact = () => {
 return (
  <FullSizeSection id="contact" bg="bgSec">
   <ResponsiveImage
    img={img}
    img2x={img2x}
    webp={webp}
    webp2x={webp2x}
    alt={'office supplies on the table'}
   />
   <ContentBox>
    <SectionTitle>Request Callback</SectionTitle>
    <Form />
   </ContentBox>
  </FullSizeSection>
 );
};

export default Contact;
