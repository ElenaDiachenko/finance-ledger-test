import { ResponsiveImage, FullSizeSection, SectionTitle, Button } from 'components/ui';
import { ContentBox, Desc, SubTitle } from './styles';
import img from 'assets/images/home/people.jpg';
import webp from 'assets/images/home/people.webp';
import img2x from 'assets/images/home/people@2x.jpg';
import webp2x from 'assets/images/home/people@2x.webp';

const About = () => {
 return (
  <FullSizeSection id={'about'} bg="accent">
   <ResponsiveImage img={img} img2x={img2x} webp={webp} webp2x={webp2x} alt={'a group of people'} />
   <ContentBox>
    <SubTitle>What you are looking for</SubTitle>
    <SectionTitle>We provide bespoke solutions</SectionTitle>
    <Desc>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae
     laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum
     temporibus doloribus iste maiores deleniti?
    </Desc>
    <Button to="" className="outline">
     Read More
    </Button>
   </ContentBox>
  </FullSizeSection>
 );
};

export default About;
