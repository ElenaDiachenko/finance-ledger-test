import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Icon } from 'components/ui';
import { ErrorWrapper, Input, InputWrapper, Label, Placeholder, Span, StyledForm } from './styles';

type UserInput = {
 name: string;
 email: string;
};

const validationSchema = yup.object({
 name: yup.string().required('Name is required'),
 email: yup.string().required('Email is required'),
});

const Form = () => {
 const {
  register,
  reset,
  handleSubmit,
  formState: { errors },
 } = useForm<UserInput>({ mode: 'onTouched', resolver: yupResolver(validationSchema) });
 const handlerSubmit = (credentials: UserInput) => {
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
       <Icon name="error" width={14} height={14} />
       <Span>{errors?.name?.message || 'Error!'}</Span>
      </ErrorWrapper>
     )}
    </Label>
    <Label htmlFor="email">
     <Input type="email" {...register('email')} placeholder="example@gmail.com" id="email" />
     <Placeholder className="placeholder">Enter email*</Placeholder>
     {errors?.email && (
      <ErrorWrapper>
       <Icon name="error" width={14} height={14} />
       <Span>{errors?.email?.message || 'Error!'}</Span>
      </ErrorWrapper>
     )}
    </Label>
   </InputWrapper>
   <button type="submit">Send</button>
   {/* <ButtonText type="submit">Send</ButtonText> */}
  </StyledForm>
 );
};

export default Form;
