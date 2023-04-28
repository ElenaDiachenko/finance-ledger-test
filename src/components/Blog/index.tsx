import { ResponsiveImage, FullSizeSection, SectionTitle, Button } from 'components/ui';
import img from 'assets/images/home/blog.jpg';
import webp from 'assets/images/home/blog.webp';
import img2x from 'assets/images/home/blog@2x.jpg';
import webp2x from 'assets/images/home/blog@2x.webp';
import { ContentBox, Desc, SubTitle } from './styles';

const Blog = () => {
 return (
  <FullSizeSection id={'blog'} bg="bgAccent">
   <ContentBox>
    <SubTitle>April 16 2020</SubTitle>
    <SectionTitle>Blog Post One</SectionTitle>
    <Desc>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae
     laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum
     temporibus doloribus iste maiores deleniti?
    </Desc>
    <Button variant="blue" to="" className="outline">
     Read Our Blog
    </Button>
   </ContentBox>
   <ResponsiveImage img={img} img2x={img2x} webp={webp} webp2x={webp2x} alt={'a group of blog'} />
  </FullSizeSection>
 );
};

export default Blog;
