import Image from "next/image";
import futbol from "../public/img/futbol.jpg";

import styles from "../styles/inicio.module.css";

const Nosotros = () => {
  return (
    <section className="mt-5">
      <div>
        <h2 className={`text-center fs-1 ${styles.contactoHeading}`}>
          ¿Quiénes somos?
        </h2>
        <div className="d-flex justify-content-center">
          <p className={`${styles.nosotrosText}`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            voluptatem esse obcaecati assumenda cupiditate facere totam tempora
            natus tempore eligendi recusandae ullam dolor, maxime exercitationem
            sed delectus non a nesciunt, inventore, hic enim repudiandae porro!
            Sed molestias, sapiente sunt et voluptate veritatis maxime iure quae
            architecto dolorum perspiciatis molestiae reprehenderit.
          </p>
        </div>
        <div className={`d-flex justify-content-center ${styles.futbol}`}>
          <Image width={800} height={500} src={futbol} alt="nosotros" />
        </div>
      </div>
      <hr />
      <div className="mt-5 mb-5">
        <h2 className={`text-center fs-1 ${styles.contactoHeading}`}>
          Envíos al interior
        </h2>
        <div className="row">
          <div className="col-md-12 col-lg-4 mt-5 p-0 d-flex flex-colum justify-content-center">
            <article className={`card ${styles.enviosCard}`}>
              <p>
                Nos haces el pedido, lo cotizamos en el momento y nos pasas los
                datos para enviar.
              </p>
              <i className={`bi bi-list-ul ${styles.icono}`}></i>
            </article>
          </div>
          <div className="col-md-12 col-lg-4 mt-5 p-0 d-flex flex-colum justify-content-center">
            <article className={`card ${styles.enviosCard}`}>
              <p>
                El envío puede ser por cualquier expreso interprovincial, o por
                flete entre 9:00 y 12:00 hs.
              </p>
              <i className={`bi bi-truck ${styles.icono}`}></i>
            </article>
          </div>
          <div className="col-md-12 col-lg-4 mt-5 mb-5 p-0 d-flex flex-colum justify-content-center">
            <article className={`card ${styles.enviosCard}`}>
              <p>
                El mínimo de envío al interior es de 8kgs (puede ser variado).
              </p>
              <i className={`bi bi-box-seam ${styles.icono}`}></i>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
