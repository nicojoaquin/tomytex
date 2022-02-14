import Image from "next/image";
import whatsapp from "../public/img/wpp.png";
import instagram from "../public/img/iglogo.png";
import facebook from "../public/img/fb.png";

import styles from "../styles/inicio.module.css";

const Contacto = () => {
  return (
    <section className="text-center mt-5 mb-5">
      <h2 className={`fs-1 ${styles.contactoHeading}`}>
        Contactanos en nuestras redes
      </h2>
      <div className={`row d-flex justify-content-center ${styles.redes}`}>
        <a
          className={`col-md-12 col-lg-3 ${styles.red}`}
          href="https://api.whatsapp.com/send?phone=5491148701495&text=Escribeme"
          target="_blank"
          rel="noreferrer"
        >
          <article>
            <Image width={50} height={50} src={whatsapp} alt="whatsapp" />
            <br />
            <span>Escribinos a whatsapp</span>
          </article>
        </a>
        <a
          href="https://www.instagram.com/tomytexsrl/?hl=es"
          target="_blank"
          rel="noreferrer"
          className={`col-md-12 col-lg-3 ${styles.red}`}
        >
          <article>
            <Image width={50} height={50} src={instagram} alt="instagram" />
            <br />
            <span>Seguinos en Instagram </span>
          </article>
        </a>
        <a
          href="https://www.facebook.com/tomytexsrl/"
          target="_blank"
          rel="noreferrer"
          className={`col-md-12 col-lg-3 ${styles.red}`}
        >
          <article>
            <Image width={50} height={50} src={facebook} alt="facebook" />
            <br />
            <span>Visita nuestro Facebook</span>
          </article>
        </a>
      </div>
    </section>
  );
};

export default Contacto;
