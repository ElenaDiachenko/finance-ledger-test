import { FC, ReactNode } from 'react';
import styled from 'styled-components';

type SectionProps = {
 id: string;
 children: ReactNode;
 bg: string;
};
const FullSizeSection: FC<SectionProps> = ({ id, children, bg }) => {
 return (
  <Section id={id} bg={bg}>
   {children}
  </Section>
 );
};

export default FullSizeSection;

export const Section = styled.section<SectionProps>`
 margin: 0 auto;
 background: ${({ theme, bg }) => theme.colors[bg]};
 @media ${({ theme }) => theme.device.tablet} {
  display: grid;
  grid-template-columns: 1fr 1fr;
 }
`;
