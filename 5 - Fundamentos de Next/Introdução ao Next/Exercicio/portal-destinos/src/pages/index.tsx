import Layout from "../components/Layout/Layout";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={styles.banner}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h2 className={styles.title}>Descubra os melhores destinos</h2>
          <p className={styles.subtitle}>
            Explore lugares incríveis do Brasil e do mundo com a gente.
          </p>
          <Link href="/destinos" className={styles.button}>
            Ver Destinos
          </Link>
        </div>
      </section>
    </Layout>
  );
}
