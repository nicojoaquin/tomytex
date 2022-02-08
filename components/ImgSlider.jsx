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

const ImgSlider = ({ imagen }) => {
  return (
    <Slider {...settings} className={`container ${styles.slider}`}>
      {imagen.map((img, idx) => (
        <div key={idx}>
          <Image
            key={idx}
            priority
            layout="responsive"
            width={500}
            height={500}
            src={img.url}
            alt={`Tela`}
            className="shadow-lg"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImgSlider;