import img1 from 'assets/images/team/person1.jpg';
import webp1 from 'assets/images/team/person1.webp';
import img2x1 from 'assets/images/team/person1@2x.jpg';
import webp2x1 from 'assets/images/team/person1@2x.webp';
import img2 from 'assets/images/team/person2.jpg';
import webp2 from 'assets/images/team/person2.webp';
import img2x2 from 'assets/images/team/person2@2x.jpg';
import webp2x2 from 'assets/images/team/person2@2x.webp';
import img3 from 'assets/images/team/person3.jpg';
import webp3 from 'assets/images/team/person3.webp';
import img2x3 from 'assets/images/team/person3@2x.jpg';
import webp2x3 from 'assets/images/team/person3@2x.webp';

export const teamList = [
 {
  title: 'John Doe',
  desc: 'President',
  img: img1,
  webp: webp1,
  img2x: img2x1,
  webp2x: webp2x1,
  tags: 'photo',
 },
 {
  title: 'Jane Doe',
  desc: 'Vice President',
  img: img2,
  webp: webp2,
  img2x: img2x2,
  webp2x: webp2x2,
  tags: 'photo',
 },
 {
  title: 'Steve Smith',
  desc: 'Marketing Head',
  img: img3,
  webp: webp3,
  img2x: img2x3,
  webp2x: webp2x3,
  tags: 'photo',
 },
];

export type TeamItemType = (typeof teamList)[number];
