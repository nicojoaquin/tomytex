import { useState } from "react";
import Buscador from "../components/Buscador";
import Layout from "../components/Layout";
import Listado from "../components/Listado";

import styles from "../styles/tienda.module.css";

const Tienda = ({ telas }) => {
  const [telasFiltradas, setTelasFiltradas] = useState([]);
  const [query, setQuery] = useState("");

  return (
    <Layout page={"Tienda"}>
      <main className="container">
        <div
          className={`d-flex flex-wrap align-items-center justify-content-start ${styles.tiendaContainer}`}
        >
          <h1 className={`heading ${styles.header}`}>Nuestras telas</h1>
          <Buscador
            setTelasFiltradas={setTelasFiltradas}
            telas={telas}
            query={query}
            setQuery={setQuery}
          />
        </div>
        <hr className="mb-5" />
        <Listado telasFiltradas={telasFiltradas} telas={telas} query={query} />
      </main>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.API_URL}`);
  const { telas } = await res.json();

  return {
    props: {
      telas,
    },
  };
};

export default Tienda;
