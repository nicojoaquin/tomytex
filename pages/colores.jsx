import { useState } from "react";
import Buscador from "../components/Buscador";
import Layout from "../components/Layout";
import Listado from "../components/Listado";

import styles from "../styles/tienda.module.css";

const Colores = ({ colores }) => {
  const [coloresFiltrados, setcoloresFiltrados] = useState([]);
  const [query, setQuery] = useState("");

  return (
    <Layout page={"Colores"}>
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

export const getServerSideProps = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/colores`);
    const data = await res.json();

    return {
      props: {
        colores: data?.colores,
      },
    };
  } catch (err) {
    return {
      props: {},
      redirect: {
        destination: "/404",
      },
    };
  }
};

export default Colores;
