import Image from "next/image";
import tomytex from "../public/img/tomytex.jpg";
import tomytex2 from "../public/img/tomytex2.jpg";
import tomytex3 from "../public/img/tomytex3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const Carousel = () => {
  return (
    <section className="mt-5">
      <Slider {...settings}>
        <div className="carousel-item active">
          <Image width={1500} height={800} src={tomytex} alt="tomytex" />
        </div>
        <div className="carousel-item">
          <Image width={1500} height={800} src={tomytex3} alt="tomytex" />
        </div>
        <div className="carousel-item">
          <Image width={1500} height={800} src={tomytex2} alt="tomytex" />
        </div>
      </Slider>
    </section>
  );
};

export default Carousel;
