import styles from "./CardDestino.module.css";

export default function CardDestino({ nome, imagem }) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={nome} className={styles.imagem} />
      <h3>{nome}</h3>
    </div>
  );
}
