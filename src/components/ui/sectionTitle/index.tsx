import { FC, ReactNode } from 'react';
import { StyledTitle } from './styles';

type TitleProps = {
 children: ReactNode;
};
const SectionTitle: FC<TitleProps> = ({ children }) => {
 return <StyledTitle>{children}</StyledTitle>;
};

export default SectionTitle;
