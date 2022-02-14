import Layout from "../components/Layout";
import Contacto from "../components/Contacto";
import Carousel from "../components/Carousel";

import styles from "../styles/inicio.module.css";

const Home = () => {
  return (
    <Layout page={"Inicio"}>
      <main className="container">
        <section className="text-center mb-5">
          <h1 className={styles.inicioHeading}>Bienvenidos a Tomytex</h1>
          <p className="text-decoration-underline fst-italic text-muted">
            Único especialista en telas DEPORTIVAS y distribución de TELAS
            <span className="fw-bolder"> MODELO</span>
          </p>
        </section>
        <hr />
        <Carousel />
        <hr />
        <Contacto />
      </main>
    </Layout>
  );
};

export default Home;
