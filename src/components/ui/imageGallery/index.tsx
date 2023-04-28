import { FC } from 'react';
import { ImageType } from 'utils/galeryImages';
import { ResponsiveImage } from 'components/ui';
import { StyledGallery } from './styles';

type GaleryProps = {
 images: ImageType[];
};

const ImageGallery: FC<GaleryProps> = ({ images }) => {
 return (
  <div className="">
   <StyledGallery>
    {images.map((image) => (
     <ResponsiveImage
      key={image.id}
      img={image.img}
      img2x={image.img2x}
      webp={image.webp}
      webp2x={image.webp2x}
      alt={image.description}
     />
    ))}
   </StyledGallery>
  </div>
 );
};

export default ImageGallery;
