import Image from "next/image";
import tomytex from "../public/img/tomytex.jpg";
import tomytex2 from "../public/img/tomytex2.jpg";
import tomytex3 from "../public/img/tomytex3.jpg";

const Carousel = () => {
  return (
    <section className="mt-5">
      <div
        id="carouselExampleCaptions"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image width={1500} height={800} src={tomytex} alt="tomytex" />
          </div>
          <div className="carousel-item">
            <Image width={1500} height={800} src={tomytex3} alt="tomytex" />
          </div>
          <div className="carousel-item">
            <Image width={1500} height={800} src={tomytex2} alt="tomytex" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
