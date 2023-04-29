import { FC, ReactNode } from 'react';
import styled from 'styled-components';

type SectionProps = {
 id: string;
 children: ReactNode;
};
const SectionWithContainer: FC<SectionProps> = ({ id, children }) => {
 return <Section id={id}>{children}</Section>;
};

export default SectionWithContainer;

export const Section = styled.section`
 color: ${({ theme }) => theme.colors.text};
 padding: 56px 0 40px;

 @media ${({ theme }) => theme.device.tablet} {
  padding: 48px 0 40px;
 }
 @media ${({ theme }) => theme.device.desktop} {
  padding: 80px 0 86px;
 }
`;
