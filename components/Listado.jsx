import Tela from "./Tela";

const Listado = ({ telasFiltradas, telas }) => {
  return (
    <section className="container row p-0 m-0">
      {telasFiltradas.length === 0
        ? telas.map((tela) => (
            <article key={tela.id} className="col-sm-6 col-md-4 col-lg-3">
              <Tela {...tela} />
            </article>
          ))
        : telasFiltradas.map((tela) => (
            <article key={tela.id} className="col-sm-6 col-md-4 col-lg-3">
              <Tela {...tela} />
            </article>
          ))}
    </section>
  );
};

export default Listado;
