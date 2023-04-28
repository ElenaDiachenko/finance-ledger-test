import { Container, ResponsiveImage } from 'components/ui';
import img from 'assets/images/home/people.jpg';
import webp from 'assets/images/home/people.webp';
import img2x from 'assets/images/home/people@2x.jpg';
import webp2x from 'assets/images/home/people@2x.webp';

import { Section } from './styles';

const About = () => {
 return (
  <Section id="about">
   <ResponsiveImage img={img} img2x={img2x} webp={webp} webp2x={webp2x} alt={'agroup of people'} />
  </Section>
 );
};

export default About;
