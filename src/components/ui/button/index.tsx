import { FC, ReactNode } from 'react';
import { StyledButton } from './style';

type Props = {
 children: ReactNode;
 variant?: string;
 className: string;
 to: string;
};

const Button: FC<Props> = ({ children, className, variant, to }) => {
 return (
  <StyledButton to={to} smooth={true} className={className} variant={variant}>
   {children}
  </StyledButton>
 );
};

export default Button;
