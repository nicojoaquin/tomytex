import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1 className="heading">Página no encontrada</h1>

      <div className="d-flex justify-content-center">
        <Link href="/">
          <a>Volver</a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
