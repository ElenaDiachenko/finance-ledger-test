import { FC } from 'react';

type ResponsiveImageProps = {
 img: string;
 img2x: string;
 webp: string;
 webp2x: string;
 alt: string;
};

const ResponsiveImage: FC<ResponsiveImageProps> = ({ img, img2x, webp, webp2x, alt }) => {
 return (
  <picture>
   <source srcSet={`${webp} 1x, ${webp2x} 2x`} type="image/webp" />
   <source srcSet={`${img} 1x, ${img2x} 2x`} type="image/jpeg" />
   <img src={img} alt={alt} />
  </picture>
 );
};

export default ResponsiveImage;
