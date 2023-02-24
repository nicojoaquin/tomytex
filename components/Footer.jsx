import Image from "next/image";
import whatsapp from "../public/img/wpp.png";
import instagram from "../public/img/iglogo.png";
import facebook from "../public/img/fb.png";
import phone from "../public/img/phone.png";
import direc from "../public/img/direc.png";

import styles from "../styles/inicio.module.css";

const Footer = () => {
  return (
    <section
      className="text-center mt-5 p-5 text-light"
      style={{ background: "rgb(20, 20, 20)" }}
    >
      <h2 className={`fs-1 ${styles.contactoHeading} text-light`}>
        Contactanos en nuestras redes
      </h2>
      <div className={`row mb-5 ${styles.redes}`}>
        <a
          className={`col-md-12 col-lg-4 mt-5 p-0 d-flex flex-colum justify-content-center`}
          href="https://api.whatsapp.com/send?phone=5491139348575&text=Hola%2c%20me%20gustaría%20hacerte%20una%20pregunta%2e%2e%2e"
          target="_blank"
          rel="noreferrer"
        >
          <article className={styles.red}>
            <Image width={50} height={50} src={whatsapp} alt="whatsapp" />
            <br />
            <span>Escribinos a whatsapp</span>
          </article>
        </a>
        <a
          href="https://www.instagram.com/tomytexsrl/?hl=es"
          target="_blank"
          rel="noreferrer"
          className={`col-md-12 col-lg-4 mt-5 p-0 d-flex flex-colum justify-content-center`}
        >
          <article className={styles.red}>
            <Image width={50} height={50} src={instagram} alt="instagram" />
            <br />
            <span>Seguinos en Instagram </span>
          </article>
        </a>
        <a
          href="https://www.facebook.com/tomytexsrl/"
          target="_blank"
          rel="noreferrer"
          className={`col-md-12 col-lg-4 mt-5 p-0 d-flex flex-colum justify-content-center`}
        >
          <article className={styles.red}>
            <Image width={50} height={50} src={facebook} alt="facebook" />
            <br />
            <span>Visitanos en Facebook</span>
          </article>
        </a>
      </div>
      <div className="d-flex justify-content-center">
        <div className={`d-flex ${styles.footer}`}>
          <article>
            <Image width={50} height={50} src={direc} alt="facebook" />
            <br />
            <span>Azcuénaga 540</span>
            <br />
            <span>C1029AAL CABA</span>
          </article>
          <article>
            <Image width={50} height={50} src={phone} alt="facebook" />
            <br />
            <span>Numero de linea:</span>
            <br />
            <span>(011) 49638510</span>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Footer;
