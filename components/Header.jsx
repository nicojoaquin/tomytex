import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "../styles/header.module.css";

const Header = () => {
  const router = useRouter();

  return (
    <header className={`p-3 ${styles.header}`}>
      <div className="container-fluid d-flex justify-content-center flex-column align-items-center">
        <Link href="/">
          <a>
            <Image
              className={styles.img}
              src="/img/logo.svg"
              alt="logo"
              width={350}
              height={200}
            />
          </a>
        </Link>
      </div>
      <div className="px-3 d-lg-flex justify-content-center">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Link href="/">
                <a
                  className={`fw-bold fs-1 p-3 rounded-3 text-decoration-none ${
                    router.pathname == "/" ? styles.active : styles.navlink
                  }`}
                >
                  Inicio
                </a>
              </Link>
              <Link href="/telas">
                <a
                  className={`fw-bold fs-1 p-3 rounded-3 text-decoration-none ${
                    router.pathname == "/telas" ? styles.active : styles.navlink
                  }`}
                >
                  Nuestras Telas
                </a>
              </Link>
              <Link href="/colores">
                <a
                  className={`fw-bold fs-1 p-3 rounded-3 text-decoration-none ${
                    router.pathname == "/colores"
                      ? styles.active
                      : styles.navlink
                  }`}
                >
                  Colores
                </a>
              </Link>
              <Link href="/contacto">
                <a
                  className={`fw-bold fs-1 p-3 rounded-3 text-decoration-none ${
                    router.pathname == "/contacto"
                      ? styles.active
                      : styles.navlink
                  }`}
                >
                  Contacto
                </a>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
