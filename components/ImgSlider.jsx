import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = ({ imagenes }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    imagenes.map((img) => {
      setImages([
        ...images,
        { original: img.url, thumbnail: img.url, thumbnailHeight: "60px" },
      ]);
    });
  }, []);

  return (
    <ImageGallery
      showPlayButton={false}
      showFullscreenButton={false}
      items={images}
    />
  );
};

export default ImgSlider;
