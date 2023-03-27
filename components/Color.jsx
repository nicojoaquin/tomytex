import Image from "next/image";
import desconocido from "../public/img/desconocido.jpg";

import styles from "../styles/card.module.css";

const Color = ({ nombre, imagen }) => {
  return (
    <div className={styles.card}>
      <div className={`p-5 ${styles.cardImg}`}>
        {!!imagen ? (
          <Image
            objectFit="cover"
            priority
            layout="responsive"
            width={300}
            height={300}
            src={imagen.url}
            alt={`Color ${nombre}`}
          />
        ) : (
          <Image
            priority
            layout="responsive"
            width={300}
            height={300}
            src={desconocido}
            alt={`Color ${nombre}`}
          />
        )}
      </div>
      <div className={`p-3 ${styles.body}`}>
        <h3>{nombre}</h3>
      </div>
    </div>
  );
};

export default Color;
