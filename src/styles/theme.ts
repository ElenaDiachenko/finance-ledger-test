export type ThemeType = typeof theme;

const size = {
 mobile: '320px',
 mobileMax: '767px',
 tablet: '768px',
 tabletMax: '1359px',
 desktop: '1360px',
};

export const theme = {
 colors: {
  white: '#fff',
  text: '#333333',
  secondary: '#e9e9e9',
  placeholder: ' #808080',
  accent: '#28a745',
  accentHover: '#2ebf4f',
  bg: '#fff',
  bgSec: '#f4f4f4',
  bgAccent: '#0284d0',
  input: '#f5f5f5',
 },
 fontSizes: {
  xs: '16px',
  s: '18px',
  m: '20px',
  l: '35px',
  xl: '40px',
  xxl: '55px',
 },
 fontWeights: {
  light: 300,
  normal: 400,
  bold: 600,
 },
 lineHeights: {
  body: 1.36,
  title: 1.2,
 },
 borders: {
  none: 'none',
  normal: '1px solid',
 },
 radii: {
  none: '0',
  sm: '5px',
 },
 device: {
  mobile: `screen and (min-width: ${size.mobile})`,
  mobileMax: `screen and (max-width: ${size.mobileMax})`,
  tablet: `screen and (min-width: ${size.tablet})`,
  tabletMax: `screen and (max-width: ${size.tabletMax})`,
  desktop: `screen and (min-width: ${size.desktop})`,
 },
 shadow: '2px 2px 12px 2px rgba(0, 0, 0, 0.4)',
 gradient: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
 cubic: '250ms cubic-bezier(0.4, 0, 0.2, 1);',
};
