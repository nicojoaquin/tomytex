import Image from "next/image";
import whatsapp from "../public/img/wpp.png";
import instagram from "../public/img/iglogo.png";
import facebook from "../public/img/fb.png";
import phone from "../public/img/phone.png";
import direc from "../public/img/direc.png";

import styles from "../styles/inicio.module.css";

const Contacto = () => {
  return (
    <section className="container">
      <div
        className={`d-flex justify-content-start ${styles.contactoContainer}`}
      >
        <h1 className={`heading ${styles.header}`}>Contactanos</h1>
      </div>
      <hr className="mb-5" />
      <div className="d-flex flex-column align-items-center align-items-lg-start">
        <h2
          className={`text-center mb-4 mb-lg-5 text-decoration-underline fs-1 ${styles.contactoHeading}`}
        >
          Nuestro local
        </h2>
        <div className="text-center fs-3">
          <article className="d-flex flex-column mb-5 flex-lg-row align-items-center gap-md-3">
            <Image width={50} height={50} src={direc} alt="facebook" />
            <div>
              <span>Azcuénaga 540</span>
              <br />
              <span>C1029AAL CABA</span>
            </div>
          </article>
          <article className="d-flex flex-column flex-lg-row align-items-center gap-md-3">
            <Image width={50} height={50} src={phone} alt="facebook" />
            <div>
              <span>Numero de linea:</span>
              <br />
              <span>(011) 49638510</span>
            </div>
          </article>
        </div>
      </div>
      <div className="mt-5 py-5 d-flex flex-column align-items-center align-items-lg-start">
        <h2
          className={`text-center mb-4 mb-lg-5 text-decoration-underline fs-1 ${styles.contactoHeading}`}
        >
          Nuestras redes
        </h2>
        <div
          className={`d-flex flex-column flex-lg-row gap-5 fs-3 ${styles.redes}`}
        >
          <a
            className="p-0 d-flex flex-colum justify-content-center text-decoration-none"
            href="https://api.whatsapp.com/send?phone=5491139348575&text=Hola%2c%20me%20gustaría%20hacerte%20una%20pregunta%2e%2e%2e"
            target="_blank"
            rel="noreferrer"
          >
            <article
              className={`d-flex flex-column justify-content-center align-items-center p-5 ${styles.red}`}
            >
              <Image
                className="text-center"
                width={50}
                height={50}
                src={whatsapp}
                alt="whatsapp"
              />
              <br />
              <div className="d-flex flex-column">
                <span>Escribinos a whatsapp:</span>
                <p>(+54 9) 1139348575</p>
              </div>
            </article>
          </a>
          <a
            href="https://www.instagram.com/tomytexsrl/?hl=es"
            target="_blank"
            rel="noreferrer"
            className="p-0 d-flex flex-colum justify-content-center text-decoration-none"
          >
            <article
              className={`d-flex flex-column justify-content-center align-items-center p-5 ${styles.red}`}
            >
              <Image
                className="text-center"
                width={50}
                height={50}
                src={instagram}
                alt="instagram"
              />
              <br />
              <div className="d-flex flex-column">
                <span>Seguinos en Instagram </span>
                <p>@tomytexsrl</p>
              </div>
            </article>
          </a>
          <a
            href="https://www.facebook.com/tomytexsrl/"
            target="_blank"
            rel="noreferrer"
            className="p-0 d-flex flex-colum justify-content-center text-decoration-none"
          >
            <article
              className={`d-flex flex-column justify-content-center align-items-center p-5 ${styles.red}`}
            >
              <Image
                className="text-center object-fit-cover"
                width={50}
                height={50}
                src={facebook}
                alt="facebook"
              />
              <br />
              <div className="d-flex flex-column">
                <span>Visitanos en Facebook</span>
                <p>Tomy Tex</p>
              </div>
            </article>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
