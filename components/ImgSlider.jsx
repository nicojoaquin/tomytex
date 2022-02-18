import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ImgSlider = ({ imagenes }) => {
  const [images, setImages] = useState([]);
  let imagen = [];
  useEffect(() => {
    imagenes.map((img) => {
      imagen.push({
        original: img.url,
        thumbnail: img.url,
        thumbnailHeight: "60px",
      });
    });
    setImages(imagen);
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
