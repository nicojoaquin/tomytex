import ImageGallery from "react-image-gallery";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = ({ imagenes }) => {
  const images = imagenes.map(({ url }) => ({
    original: url,
    thumbnail: url,
    thumbnailHeight: "60px",
  }));

  return (
    <ImageGallery
      showPlayButton={false}
      showFullscreenButton={false}
      items={images}
    />
  );
};

export default ImgSlider;
