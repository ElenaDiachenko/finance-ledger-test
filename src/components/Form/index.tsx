import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Icon } from 'components/ui';
import { ErrorWrapper, Input, InputWrapper, Label, Placeholder, Span, StyledForm } from './styles';
import { validationSchema } from 'utils';
import { sendForm } from 'services';

export type UserInput = {
 name: string;
 email: string;
};

const Form = () => {
 const {
  register,
  reset,
  handleSubmit,
  formState: { errors, isSubmitting },
 } = useForm<UserInput>({ mode: 'onTouched', resolver: yupResolver(validationSchema) });

 const handlerSubmit = (credentials: UserInput) => {
  sendForm(credentials);
  console.table(credentials);
  reset();
 };
 return (
  <StyledForm autoComplete="off" onSubmit={handleSubmit(handlerSubmit)}>
   <InputWrapper>
    <Label htmlFor="name">
     <Input type="text" {...register('name')} placeholder="John Doe" id="name" />
     <Placeholder className="placeholder">Enter your name</Placeholder>
     {errors?.name && (
      <ErrorWrapper>
       <Icon name="error" width={16} height={16} />
       <Span>{errors?.name?.message || 'Error!'}</Span>
      </ErrorWrapper>
     )}
    </Label>
    <Label htmlFor="email">
     <Input type="email" {...register('email')} placeholder="example@gmail.com" id="email" />
     <Placeholder className="placeholder">Enter email*</Placeholder>
     {errors?.email && (
      <ErrorWrapper>
       <Icon name="error" width={16} height={16} />
       <Span>{errors?.email?.message || 'Error!'}</Span>
      </ErrorWrapper>
     )}
    </Label>
   </InputWrapper>
   <Button type="submit" disabled={isSubmitting} className="primary">
    Send
   </Button>
  </StyledForm>
 );
};

export default Form;
