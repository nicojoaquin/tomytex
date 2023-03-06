import Image from "next/image";
import futbol from "../public/img/futbol.jpg";

import styles from "../styles/inicio.module.css";

const Nosotros = () => {
  return (
    <section className="mt-5 px-3">
      <div className="row mb-5">
        <article className="col-xl-6 mb-5">
          <h2 className={`mt-5 text-center fs-1 ${styles.contactoHeading}`}>
            ¿Quiénes somos?
          </h2>
          <div className="d-flex justify-content-center">
            <p className={`mb-5 ${styles.nosotrosText}`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi voluptatem esse obcaecati assumenda cupiditate facere
              totam tempora natus tempore eligendi recusandae ullam dolor,
              maxime exercitationem sed delectus non a nesciunt, inventore, hic
              enim repudiandae porro! Sed molestias, sapiente sunt et voluptate
              veritatis maxime iure quae architecto dolorum perspiciatis
              molestiae reprehenderit.
            </p>
          </div>
          <div className={`d-flex justify-content-center ${styles.futbol}`}>
            <Image width={600} height={400} src={futbol} alt="nosotros" />
          </div>
        </article>
        <aside className="col-xl-6 d-flex justify-content-center align-items-center flex-column">
          <h2 className={`mb-5 pb-3 fs-1 ${styles.contactoHeading}`}>
            Atención al público
          </h2>
          <h3 className="mb-5 tex-center text-muted text-decoration-underline">
            La venta mínima es de 1KG
          </h3>
          <iframe
            className={`mb-5 ${styles.iframe}`}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13136.192003325405!2d-58.4009899!3d-34.6029477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4790e9e56be28530!2sTomytex%20Mayorista%20Textil!5e0!3m2!1ses!2sar!4v1645128157502!5m2!1ses!2sar"
            style={{ border: 0, width: "90%", height: "550px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </aside>
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
