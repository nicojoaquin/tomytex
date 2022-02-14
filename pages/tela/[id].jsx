import Layout from "../../components/Layout";
import ImgSlider from "../../components/ImgSlider";
import Image from "next/image";
import desconocido from "../../public/img/desconocido.jpg";

import styles from "../../styles/card.module.css";

const Producto = ({ tela }) => {
  const { desc, imagenes, nombre, comp } = tela;

  return (
    <Layout>
      <article className="container-fluid p-0 m-0 row">
        <div className="col-xl-6 m-0 p-0 mb-5">
          <h3 className="heading">{nombre}</h3>
          {imagenes.length > 0 ? (
            <ImgSlider imagenes={imagenes} />
          ) : (
            <Image
              priority
              layout="responsive"
              width={300}
              height={300}
              src={desconocido}
              alt={`Tela ${nombre}`}
            />
          )}
        </div>
        <div
          className={`mt-5 p-5 col-xl-6  d-flex flex-column justify-content-center align-items-center ${styles.desc}`}
        >
          <div>
            <span className="me-3" style={{ fontSize: "2.5rem" }}>
              Composición:
            </span>
            <u>{comp}</u>
          </div>
          <h3 className="mt-5">Descripción</h3>
          <p className={`mt-1 text-underline ${styles.text}`}>{desc}</p>
        </div>
      </article>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`${process.env.API_URL}/tela/${id}`);
  const { tela } = await res.json();

  return {
    props: {
      tela,
    },
  };
};

export default Producto;
