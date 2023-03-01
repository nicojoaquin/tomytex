import style from "../styles/tienda.module.css";

const Buscador = ({ handleItemsFiltrados, items, query, handleQuery }) => {
  const filtrarItems = () => {
    const filtro = items.filter((item) => {
      if (query === "") {
        return item;
      } else {
        return item.nombre.toLowerCase().includes(query.trim().toLowerCase());
      }
    });

    handleItemsFiltrados(filtro);
  };

  return (
    <input
      className={style.buscador}
      type="text"
      placeholder="Buscar..."
      value={query}
      onChange={({ target }) => handleQuery(target.value)}
      onKeyUp={filtrarItems}
    />
  );
};

export default Buscador;
