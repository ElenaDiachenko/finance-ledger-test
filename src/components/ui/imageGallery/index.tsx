import { FC } from 'react';
import { ImageType } from 'utils/galeryImages';
import { ResponsiveImage } from 'components/ui';
import { StyledGallery } from './styles';

type GaleryProps = {
 images: ImageType[];
 handleLitebox: (idx: number) => void;
};

const ImageGallery: FC<GaleryProps> = ({ images, handleLitebox }) => {
 return (
  <StyledGallery>
   {images.map((image, idx) => (
    <ResponsiveImage
     key={image.id}
     img={image.img}
     img2x={image.img2x}
     webp={image.webp}
     webp2x={image.webp2x}
     alt={image.description}
     idx={idx}
     handleLitebox={handleLitebox}
    />
   ))}
  </StyledGallery>
 );
};

export default ImageGallery;
