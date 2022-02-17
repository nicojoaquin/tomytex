import Image from "next/image";
import Slider from "react-slick";

import styles from "../styles/card.module.css";

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
  return (
    <Slider {...settings} className={`container ${styles.slider}`}>
      {imagenes.map(({ url, public_id: id }) => (
        <div key={id}>
          <Image
            priority
            layout="responsive"
            width={500}
            height={500}
            src={url}
            alt={`Tela`}
            className="shadow-lg ms-5"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImgSlider;
