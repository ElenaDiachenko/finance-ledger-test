import styled from 'styled-components';

import img from 'assets/images/home/showcase.jpg';
import webp from 'assets/images/home/showcase.webp';
import img2x from 'assets/images/home/showcase@2x.jpg';
import webp2x from 'assets/images/home/showcase@2x.webp';

export const Section = styled.section`
 padding-top: 142px;
 padding-bottom: 96px;
 text-align: center;

 background: ${({ theme }) => theme.gradient}, url(${img}) no-repeat center/cover;
 @supports (background: ${({ theme }) => theme.gradient}, url(${webp})) {
  background: ${({ theme }) => theme.gradient}, url(${webp}) no-repeat center/cover;
 }

 @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
  background: ${({ theme }) => theme.gradient}, url(${img2x}) no-repeat center/cover;
  @supports (background: ${({ theme }) => theme.gradient}, url(${webp2x})) {
   background: ${({ theme }) => theme.gradient}, url(${webp2x}) no-repeat center/cover;
  }
 }

 @media ${({ theme }) => theme.device.tablet} {
  background: ${({ theme }) => theme.gradient}, url(${img2x}) no-repeat center/cover;
  @supports (background: ${({ theme }) => theme.gradient}, url(${webp2x})) {
   background: ${({ theme }) => theme.gradient}, url(${webp2x}) no-repeat center/cover;
  }
 }
`;
