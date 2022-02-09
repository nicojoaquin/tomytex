import { useState } from "react";
import Buscador from "../components/Buscador";
import Layout from "../components/Layout";
import Listado from "../components/Listado";

const Tienda = ({ data }) => {
  const [telasFiltradas, setTelasFiltradas] = useState([]);

  return (
    <Layout page={"Tienda"}>
      <main className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-evenly">
          <h1 className="heading">Nuestras telas</h1>
          <Buscador setTelasFiltradas={setTelasFiltradas} telas={data} />
        </div>
        <hr className="mb-5" />
        <Listado telasFiltradas={telasFiltradas} telas={data} />
      </main>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.API_URL}/telas?populate=*`);
  const { data } = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Tienda;
