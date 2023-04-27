import { FC, ReactNode } from 'react';
import { StyledButton } from './style';

type Props = {
 type: 'button' | 'submit';
 children: ReactNode;
 variant?: string;
 className: string;
};

const Button: FC<Props> = ({ type, children, className, variant }) => {
 return (
  <StyledButton type={type} className={className} variant={variant}>
   {children}
  </StyledButton>
 );
};

export default Button;
