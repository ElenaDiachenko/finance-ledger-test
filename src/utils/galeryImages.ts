import img1 from 'assets/images/cases/cases1.jpg';
import webp1 from 'assets/images/cases/cases1.webp';
import img2x1 from 'assets/images/cases/cases1@2x.jpg';
import webp2x1 from 'assets/images/cases/cases1@2x.webp';
import img2 from 'assets/images/cases/cases3.jpg';
import webp2 from 'assets/images/cases/cases3.webp';
import img2x2 from 'assets/images/cases/cases3@2x.jpg';
import webp2x2 from 'assets/images/cases/cases3@2x.webp';
import img3 from 'assets/images/cases/cases5.jpg';
import webp3 from 'assets/images/cases/cases5.webp';
import img2x3 from 'assets/images/cases/cases5@2x.jpg';
import webp2x3 from 'assets/images/cases/cases5@2x.webp';
import img4 from 'assets/images/cases/cases7.jpg';
import webp4 from 'assets/images/cases/cases7.webp';
import img2x4 from 'assets/images/cases/cases7@2x.jpg';
import webp2x4 from 'assets/images/cases/cases7@2x.webp';
import img5 from 'assets/images/cases/cases2.jpg';
import webp5 from 'assets/images/cases/cases2.webp';
import img2x5 from 'assets/images/cases/cases2@2x.jpg';
import webp2x5 from 'assets/images/cases/cases2@2x.webp';
import img6 from 'assets/images/cases/cases4.jpg';
import webp6 from 'assets/images/cases/cases4.webp';
import img2x6 from 'assets/images/cases/cases4@2x.jpg';
import webp2x6 from 'assets/images/cases/cases4@2x.webp';

console.log(img1);
export const images = [
 {
  id: 1,
  img: img1,
  webp: webp1,
  img2x: img2x1,
  webp2x: webp2x1,
  description: 'Office meeting',
 },
 {
  id: 2,
  img: img2,
  webp: webp2,
  img2x: img2x2,
  webp2x: webp2x2,
  description: 'A man working at the laptop',
 },
 {
  id: 3,
  img: img3,
  webp: webp3,
  img2x: img2x3,
  webp2x: webp2x3,
  description: 'Handshaking ',
 },
 {
  id: 4,
  img: img4,
  webp: webp4,
  img2x: img2x4,
  webp2x: webp2x4,
  description: 'Great team',
 },
 {
  id: 5,
  img: img5,
  webp: webp5,
  img2x: img2x5,
  webp2x: webp2x5,
  description: 'A girl working at the computer',
 },
 {
  id: 6,
  img: img6,
  webp: webp6,
  img2x: img2x6,
  webp2x: webp2x6,
  description: 'Skyscrapers',
 },
];

export const slides = images.map((image) => {
 return {
  src: image.img,
  description: image.description,
  alt: image.description,
  srcSet: [
   { src: image.img, width: 640, height: 427, type: 'image/jpeg' },
   { src: image.webp, width: 640, height: 427, type: 'image/webp' },
   { src: image.img2x, width: 1280, height: 854, type: 'image/jpeg' },
   { src: image.webp2x, width: 1280, height: 854, type: 'image/webp' },
  ],
 };
});

export type ImageType = (typeof images)[number];
