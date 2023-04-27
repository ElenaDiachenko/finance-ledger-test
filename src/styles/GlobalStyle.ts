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
   background-color: ${({ theme }) => theme.colors.bg};
   color: ${({ theme }) => theme.colors.white};
   font-size:${({ theme }) => theme.fontSizes.xs};
   line-height:${({ theme }) => theme.lineHeights.body};
   font-weight:${({ theme }) => theme.fontWeights.normal};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
   @media ${({ theme }) => theme.device.tablet} {
  font-size:${({ theme }) => theme.fontSizes.s};
 }
}

#root {
  margin:0;
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
p,button,
input
 {
  padding: 0;
  margin: 0;
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
}
button,
label, 
a {
  cursor: pointer;
}
`;
