import { ThemeProps, createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { ThemeType } from './theme';

export const GlobalStyle = createGlobalStyle<ThemeProps<ThemeType>>`
${normalize}

* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
   background-color: ${({ theme }) => theme.colors.bg};
   color: ${({ theme }) => theme.colors.white};
   font-family: 'Open Sans', sans-serif;
   font-size:${({ theme }) => theme.fontSizes.xs};
   line-height:${({ theme }) => theme.lineHeights.body};
   font-weight:${({ theme }) => theme.fontWeights.normal};
 

   @media ${({ theme }) => theme.device.tablet} {
  font-size:${({ theme }) => theme.fontSizes.s};
 }
}

#root {
 min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  
}
a {
  text-decoration: none;
  color:inherit;
}

ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
 display: block;
 margin:0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
h1,
h2,
h3,
h4,
h5,
h6,
p
 {
  padding: 0;
  margin: 0;
}
input,
button,
textarea,
select {
  font: inherit;
  outline:transparent;
}

button,
label, 
a {
  cursor: pointer;
}

`;
