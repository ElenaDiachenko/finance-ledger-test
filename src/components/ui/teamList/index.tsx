import { FC } from 'react';
import { TeamItemType } from 'utils/teamListData';
import { ResponsiveImage } from 'components/ui';
import { StyledList, ContentBox, Title, Description } from './styles';

type ListProps = {
 items: TeamItemType[];
};

const TeamList: FC<ListProps> = ({ items }) => {
 return (
  <StyledList>
   {items.map((item, idx) => (
    <li key={idx}>
     <ResponsiveImage
      img={item.img}
      img2x={item.img2x}
      webp={item.webp}
      webp2x={item.webp2x}
      alt={item.alt}
     />
     <ContentBox>
      <Title>{item.title}</Title>
      <Description>{item.desc}</Description>
     </ContentBox>
    </li>
   ))}
  </StyledList>
 );
};

export default TeamList;
