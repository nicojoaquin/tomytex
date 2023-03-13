import Image from "next/image";
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

const Carousel = ({ imagenes }) => {
  return (
    <section className="mt-5">
      <Slider {...settings}>
        {imagenes.map(({ public_id, url }, index) => (
          <div
            key={public_id}
            className={`carousel-item ${index === 0 && "active"}`}
          >
            <Image
              objectFit="cover"
              width={1500}
              height={800}
              src={url}
              alt={`Carrusel - ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
