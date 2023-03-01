import Tela from "./Tela";
import Color from "./Color";

const Listado = ({ itemsFiltrados, items, query, tipo = "telas" }) => {
  const tipoDeItem = {
    telas: {
      nombre: "telas",
      componente: Tela,
      notFound: "la tela",
    },
    colores: {
      nombre: "colores",
      componente: Color,
      notFound: "el color",
    },
  }[tipo];

  const Componente = tipoDeItem.componente;

  return (
    <section className="container row p-0 m-0">
      {!items.length ? (
        <h2 className="alert alert-danger text-center">
          No hay {tipoDeItem.nombre} para mostrar
        </h2>
      ) : (
        <>
          {query.length === 0 ? (
            items.map((item) => (
              <article key={item._id} className="col-sm-6 col-md-4 col-lg-3">
                <Componente {...item} />
              </article>
            ))
          ) : itemsFiltrados.length === 0 ? (
            <h2 className="alert alert-danger text-center">
              No se encuentra {tipoDeItem.notFound}
            </h2>
          ) : (
            itemsFiltrados.map((item) => (
              <article key={item._id} className="col-sm-6 col-md-4 col-lg-3">
                <Componente {...item} />
              </article>
            ))
          )}
        </>
      )}
    </section>
  );
};

export default Listado;
