import Tela from "./Tela";

const Listado = ({ telasFiltradas, telas, query }) => {
  return (
    <section className="container row p-0 m-0">
      {!telas || !telas.length ? (
        <h2 className="alert alert-danger text-center">
          No hay telas para mostrar
        </h2>
      ) : (
        <>
          {query.length === 0 ? (
            telas.map((tela) => (
              <article key={tela._id} className="col-sm-6 col-md-4 col-lg-3">
                <Tela {...tela} />
              </article>
            ))
          ) : telasFiltradas.length === 0 ? (
            <h2 className="alert alert-danger text-center">
              No se encuentra la tela
            </h2>
          ) : (
            telasFiltradas.map((tela) => (
              <article key={tela._id} className="col-sm-6 col-md-4 col-lg-3">
                <Tela {...tela} />
              </article>
            ))
          )}
        </>
      )}
    </section>
  );
};

export default Listado;
