import Image from "next/image";
import whatsapp from "../public/img/wpp.png";
import instagram from "../public/img/iglogo.png";
import facebook from "../public/img/fb.png";

import styles from "../styles/inicio.module.css";

const Footer = () => {
  return (
    <section className="text-center mt-5 p-2 text-light bg-dark">
      <div className="d-flex flex-column flex-lg-row justify-content-lg-evenly align-items-center mb-5">
        <a
          className={`mt-5 p-0 d-flex flex-colum justify-content-center text-white text-decoration-none ${styles.redFooter}`}
          href="https://api.whatsapp.com/send?phone=5491139348575&text=Hola%2c%20me%20gustaría%20hacerte%20una%20pregunta%2e%2e%2e"
          target="_blank"
          rel="noreferrer"
        >
          <article
            className={`d-flex flex-column justify-content-center align-items-center p-5`}
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
              <span>Wwhatsapp:</span>
              <p>(+54 9) 1139348575</p>
            </div>
          </article>
        </a>
        <a
          href="https://www.instagram.com/tomytexsrl/?hl=es"
          target="_blank"
          rel="noreferrer"
          className={`mt-5 p-0 d-flex flex-colum justify-content-center text-white text-decoration-none ${styles.redFooter}`}
        >
          <article
            className={`d-flex flex-column justify-content-center align-items-center p-5`}
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
              <span>Instagram </span>
              <p>@tomytexsrl</p>
            </div>
          </article>
        </a>
        <a
          href="https://www.facebook.com/tomytexsrl/"
          target="_blank"
          rel="noreferrer"
          className={`mt-5 p-0 d-flex flex-colum justify-content-cente r text-white text-decoration-none ${styles.redFooter}`}
        >
          <article
            className={`d-flex flex-column justify-content-center align-items-center p-5`}
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
              <span>Facebook</span>
              <p>Tomy Tex</p>
            </div>
          </article>
        </a>
      </div>
    </section>
  );
};

export default Footer;
