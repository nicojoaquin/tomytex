import Layout from "../../components/Layout";
import ImgSlider from "../../components/ImgSlider";
import Image from "next/image";
import desconocido from "../../public/img/desconocido.jpg";

import styles from "../../styles/card.module.css";
import RichText from "../../components/rich-text";

const tela = {
  _id: 1,
  nombre: "Lanilla",
  desc: "Tela de lanilla",
  comp: "100% Poliester",
  imagenes: [
    {
      public_id: 1,
      url: "/img/desconocido.jpg",
    },
    {
      public_id: 1,
      url: "/img/desconocido.jpg",
    },
  ],
};

const Producto = () => {
  const { desc, imagenes, nombre, comp } = tela;
  return (
    <Layout page={nombre} description={nombre}>
      <section className="my-5 d-flex justify-content-center align-items-center">
        <article className={`container p-0 m-0 row ${styles.article}`}>
          <div className="col-xl-6  p-5 ">
            {imagenes.length > 0 ? (
              <ImgSlider imagenes={imagenes} nombre={nombre} />
            ) : (
              <Image
                priority
                layout="responsive"
                width={50}
                height={50}
                src={desconocido}
                alt={`Tela ${nombre}`}
              />
            )}
          </div>
          <div
            className={`p-5 col-xl-6  d-flex flex-column  align-items-start  ${styles.desc}`}
          >
            <div>
              <h3 className={`${styles.nombre}`}>{nombre}</h3>
              <hr />
              <span className="me-3" style={{ fontSize: "2.5rem" }}>
                Composición:
              </span>
              <u>{comp}</u>
            </div>
            <h3 className="mt-5 p-0">Descripción</h3>
            <div className={`mt-1 ${styles.text}`}>
              <RichText html={`<p>${desc.trim()}</p>`} />
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
};

// export const getServerSideProps = async (context) => {
//   const { id } = context.params;

//   try {
//     const res = await fetch(`${process.env.API_URL}/api/tela/${id}`);
//     const { tela, ok } = await res.json();

//     if (!ok) throw new Error("Not found");

//     return {
//       props: { tela },
//     };
//   } catch (error) {
//     return {
//       props: {},
//       redirect: {
//         destination: "/404",
//       },
//     };
//   }
// };

export default Producto;
