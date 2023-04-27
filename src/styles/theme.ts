export type ThemeType = typeof theme;

const size = {
 mobile: '320px',
 tablet: '768px',
 desktop: '1360px',
};

export const theme = {
 colors: {
  white: '#fff',
  text: '#333333',
  secondary: '#e9e9e9',
  placeholder: ' #808080',
  accent: '#28a745',
  bg: '#fff',
  bgSec: '#f4f4f4',
  bgAccent: '#0284d0',
 },
 fontSizes: {
  xs: '12px',
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
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
 },
 shadow: '2px 2px 12px 2px rgba(0, 0, 0, 0.4)',
 gradient: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))',
 cubic: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1);',
};
