import { FC } from 'react';

type ResponsiveImageProps = {
 img: string;
 img2x: string;
 webp: string;
 webp2x: string;
 alt: string;
 idx?: number;
 handleLitebox?: (idx: number) => void;
};

const ResponsiveImage: FC<ResponsiveImageProps> = ({
 img,
 img2x,
 webp,
 webp2x,
 alt,
 idx,
 handleLitebox,
}) => {
 const handleClick = () => {
  if (idx && handleLitebox && window.innerWidth > 767) {
   handleLitebox(idx);
  }
 };

 return (
  <picture onClick={handleClick}>
   <source srcSet={`${webp} 1x, ${webp2x} 2x`} type="image/webp" />
   <source srcSet={`${img} 1x, ${img2x} 2x`} type="image/jpeg" />
   <img src={img} alt={alt} />
  </picture>
 );
};

export default ResponsiveImage;
