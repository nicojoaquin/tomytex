import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import Nosotros from "../components/Nosotros";

import styles from "../styles/inicio.module.css";

const Home = ({ textos }) => {
  return (
    <Layout page={"Inicio"}>
      <main className="container">
        <section className="text-center mb-5">
          <h1 className={styles.inicioHeading}>Bienvenidos a Tomytex</h1>
          <p className="text-decoration-underline fst-italic text-muted">
            {textos.subtitulo}
          </p>
        </section>
        <Carousel imagenes={textos.imagenesCarrusel} />
        <Nosotros
          imagen={textos.imagenNosotros}
          desc={textos.descripcion}
          cards={{
            card1: textos.card1,
            card2: textos.card2,
            card3: textos.card3,
          }}
        />
      </main>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/textos`);
    const data = await res.json();

    return {
      props: {
        textos: data.textos,
      },
    };
  } catch (err) {
    return {
      props: {},
    };
  }
};

export default Home;
