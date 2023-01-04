import style from "../styles/tienda.module.css";

const Buscador = ({ setTelasFiltradas, telas, query, setQuery }) => {
  const filtrarTelas = () => {
    const filtro = telas.filter((tela) => {
      if (query === "") {
        return tela;
      } else {
        return tela.nombre.toLowerCase().includes(query.trim().toLowerCase());
      }
    });

    setTelasFiltradas(filtro);
  };

  return (
    <input
      className={style.buscador}
      type="text"
      placeholder="Buscar..."
      value={query}
      onChange={({ target }) => setQuery(target.value)}
      onKeyUp={filtrarTelas}
    />
  );
};

export default Buscador;
