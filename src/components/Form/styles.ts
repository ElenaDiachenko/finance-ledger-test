import styled from 'styled-components';

export const StyledForm = styled.form`
 margin-top: 69px;

 /* @media ${({ theme }) => theme.device.desktop} {
  margin-bottom: 60px;
 } */
`;
export const InputWrapper = styled.div`
 margin-bottom: 24px;

 @media ${({ theme }) => theme.device.desktop} {
  margin-bottom: 60px;
 }
`;

export const Label = styled.label`
 position: relative;
 display: block;

 :not(:last-child) {
  margin-bottom: 32px;
 }
`;

export const Input = styled.input`
 width: 100%;
 padding: 16px 8px;
 line-height: 1.44;
 color: inherit;
 border: ${({ theme }) => theme.borders.normal} ${({ theme }) => theme.colors.input};
 border-radius: ${({ theme }) => theme.radii.sm};
 outline: transparent;

 @media ${({ theme }) => theme.device.tablet} {
  font-size: ${({ theme }) => theme.fontSizes.s};
 }

 ::placeholder {
  color: ${({ theme }) => theme.colors.placeholder};
  opacity: 0;
  transition: ${({ theme }) => theme.transition};
 }

 :not(:placeholder-shown) + .placeholder,
 :focus-visible + .placeholder {
  transform: translateY(-210%);
 }

 :focus-visible::placeholder {
  opacity: 0.5;
 }
`;

export const Placeholder = styled.span`
 position: absolute;
 top: 50%;
 left: 8px;

 line-height: 1.44;
 color: ${({ theme }) => theme.colors.placeholder};
 transform: translateY(-50%);
 cursor: text;
 transition: ${({ theme }) => theme.transition};

 @media ${({ theme }) => theme.device.tablet} {
  font-size: ${({ theme }) => theme.colors.s};
 }
`;

export const ErrorWrapper = styled.span`
 position: absolute;
 top: 50px;
 left: 0;
 display: flex;
 align-items: center;
 gap: 4px;
 color: red;
`;

export const Span = styled.span`
 font-size: 14px;
 line-height: 1;
`;
