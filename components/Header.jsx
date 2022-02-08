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
          <a className="shadow-md">
            <Image
              className={styles.img}
              src="/img/logo.svg"
              alt="logo"
              width={350}
              height={200}
            />
          </a>
        </Link>

        <nav className="p-3">
          <Link href="/">
            <a
              className={`fw-bold fs-1 p-3 rounded-3 text-decoration-none ${
                router.pathname == "/" ? styles.active : styles.navlink
              }`}
            >
              Inicio
            </a>
          </Link>
          <Link href="/tienda">
            <a
              className={`fw-bold fs-1 p-3 rounded-3 text-decoration-none ms-3 ${
                router.pathname == "/tienda" ? styles.active : styles.navlink
              }`}
            >
              Telas
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
