import styled from 'styled-components';

import img from 'assets/images/home/showcase.jpg';
import webp from 'assets/images/home/showcase.webp';
import img2x from 'assets/images/home/showcase@2x.jpg';
import webp2x from 'assets/images/home/showcase@2x.webp';

export const Section = styled.section`
 padding-top: 160px;
 padding-bottom: 104px;

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
  padding: 378px 0;
  background: ${({ theme }) => theme.gradient}, url(${img2x}) no-repeat center/cover;
  @supports (background: ${({ theme }) => theme.gradient}, url(${webp2x})) {
   background: ${({ theme }) => theme.gradient}, url(${webp2x}) no-repeat center/cover;
  }
 }
 @media ${({ theme }) => theme.device.desktop} {
  padding: 270px 0;
 }
`;
export const ContentBox = styled.div`
 display: grid;
 place-items: center;
`;
export const Title = styled.h1`
 margin-bottom: 16px;
 font-size: ${({ theme }) => theme.fontSizes.xl};

 @media ${({ theme }) => theme.device.tablet} {
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
 }
`;

export const Desc = styled.p`
 margin-bottom: 24px;
 font-size: 24px;

 @media ${({ theme }) => theme.device.tablet} {
  font-size: ${({ theme }) => theme.fontSizes.xl};
 }
`;
