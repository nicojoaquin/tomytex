import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1 className="heading">Página no encontrada</h1>

      <Link href="/">
        <a>Volver al inicio</a>
      </Link>
    </div>
  );
};

export default NotFound;
