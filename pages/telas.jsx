import { useState } from "react";
import Buscador from "../components/Buscador";
import Layout from "../components/Layout";
import Listado from "../components/Listado";

import styles from "../styles/tienda.module.css";

const Telas = ({ telas }) => {
  const [telasFiltradas, setTelasFiltradas] = useState([]);
  const [query, setQuery] = useState("");

  return (
    <Layout page={"Telas"} description="Nuestras telas">
      <main className="container">
        <div
          className={`d-flex flex-wrap align-items-center justify-content-start ${styles.tiendaContainer}`}
        >
          <h1 className={`heading ${styles.header}`}>Nuestras telas</h1>
          {telas ? (
            <Buscador
              handleItemsFiltrados={setTelasFiltradas}
              items={telas}
              query={query}
              handleQuery={setQuery}
            />
          ) : null}
        </div>
        <hr className="mb-5" />
        <Listado itemsFiltrados={telasFiltradas} items={telas} query={query} />
      </main>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api`);
    const data = await res.json();

    return {
      props: {
        telas: data?.telas,
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

export default Telas;
