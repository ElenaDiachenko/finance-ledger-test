import { FC, ReactNode } from 'react';
import { StyledButton } from './style';

type Props = {
 children: ReactNode;
 variant?: string;
 className: string;
 type: 'button' | 'submit';
 disabled: boolean;
};

const Button: FC<Props> = ({ children, className, variant, type, disabled = false }) => {
 return (
  <StyledButton type={type} className={className} variant={variant} disabled={disabled}>
   {children}
  </StyledButton>
 );
};

export default Button;
