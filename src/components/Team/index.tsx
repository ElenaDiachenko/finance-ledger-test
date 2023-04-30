import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import { Container, SectionTitle, SectionWithContainer, TeamList } from 'components/ui';
import { ContentBox, Desc, SubTitle } from './styles';
import { teamListData } from 'utils';

const Team = () => {
 return (
  <SectionWithContainer id={'team'}>
   <Container>
    <ContentBox>
     <SubTitle>Who we are</SubTitle>
     <SectionTitle>Our Professional Team</SectionTitle>
     <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</Desc>
    </ContentBox>
    <TeamList items={teamListData} />
   </Container>
  </SectionWithContainer>
 );
};

export default Team;
