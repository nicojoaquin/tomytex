import { useState } from "react";
import Buscador from "../components/Buscador";
import Layout from "../components/Layout";
import Listado from "../components/Listado";

import styles from "../styles/tienda.module.css";

const colores = [
  {
    _id: 1,
    nombre: "Rojo",
    imagenes: [
      {
        public_id: 1,
        url: "/img/desconocido.jpg",
      },
    ],
  },
  {
    _id: 2,
    nombre: "Azul",
    imagenes: [
      {
        public_id: 1,
        url: "/img/desconocido.jpg",
      },
    ],
  },
  {
    _id: 3,
    nombre: "Verde",
    imagenes: [
      {
        public_id: 1,
        url: "/img/desconocido.jpg",
      },
    ],
  },
  {
    _id: 4,
    nombre: "Amarillo",
    imagenes: [
      {
        public_id: 1,
        url: "/img/desconocido.jpg",
      },
    ],
  },
];

const Colores = () => {
  const [coloresFiltrados, setcoloresFiltrados] = useState([]);
  const [query, setQuery] = useState("");

  return (
    <Layout page={"Colores"} description="Nuestros colores">
      <main className="container">
        <div
          className={`d-flex flex-wrap align-items-center justify-content-start ${styles.tiendaContainer}`}
        >
          <h1 className={`heading ${styles.header}`}>Nuestros colores</h1>
          {colores ? (
            <Buscador
              handleItemsFiltrados={setcoloresFiltrados}
              items={colores}
              query={query}
              handleQuery={setQuery}
            />
          ) : null}
        </div>
        <hr className="mb-5" />
        <Listado
          itemsFiltrados={coloresFiltrados}
          items={colores}
          query={query}
          tipo="colores"
        />
      </main>
    </Layout>
  );
};

// export const getServerSideProps = async () => {
//   try {
//     const res = await fetch(`${process.env.API_URL}/colores`);
//     const data = await res.json();

//     return {
//       props: {
//         colores: data?.colores,
//       },
//     };
//   } catch (err) {
//     return {
//       props: {},
//       redirect: {
//         destination: "/404",
//       },
//     };
//   }
// };

export default Colores;
