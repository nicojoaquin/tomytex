import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import Nosotros from "../components/Nosotros";

import styles from "../styles/inicio.module.css";

const textos = {
  subtitulo: "Tu tienda de telas en línea",
  imagenesCarrusel: [
    { public_id: 1, url: "/img/tomytex.jpg" },
    { public_id: 2, url: "/img/tomytex2.jpg" },
    { public_id: 3, url: "/img/tomytex3.jpg" },
  ],
  imagenNosotros: { public_id: 1, url: "/img/futbol.jpg" },
  descripcion:
    "Somos una empresa dedicada a la venta de telas, con más de 20 años de experiencia en el mercado. Nos caracterizamos por la calidad de nuestros productos y la atención personalizada a nuestros clientes.",
  atencion: "Atendemos a mayoristas y minoristas.",
  card1: "Contamos con las mejores telas del mercado.",
  card2: "Tenemos una amplia gama de colores y texturas.",
  card3: "Brindamos un servicio personalizado a nuestros clientes.",
};

const Home = () => {
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
          atencion={textos.atencion}
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

// export const getServerSideProps = async () => {
//   // try {
//   //   const res = await fetch(`${process.env.API_URL}/textos`);
//   //   const data = await res.json();
//   //   return {
//   //     props: {
//   //       textos: data.textos,
//   //     },
//   //   };
//   // } catch (err) {
//   //   return {
//   //     props: {},
//   //   };
//   // }
// };

export default Home;
