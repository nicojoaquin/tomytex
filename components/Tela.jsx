import Image from "next/image";
import Link from "next/link";

import styles from "../styles/card.module.css";

const Tela = ({ id, nombre, imagen }) => {
  return (
    <Link href={`/tela/${id}?${nombre.toLowerCase()}`}>
      <a style={{ textDecoration: "none" }}>
        <div className={styles.card}>
          <div className={`p-5 ${styles.cardImg}`}>
            <Image
              priority
              layout="responsive"
              width={300}
              height={300}
              src={imagen[0].url}
              alt={`Tela ${nombre}`}
            />
          </div>
          <div className={`p-3 ${styles.body}`}>
            <h3>{nombre}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Tela;