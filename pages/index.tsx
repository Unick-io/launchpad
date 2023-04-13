import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Footer } from '../components/home/Footer';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="http://unick.io">Unick.io</a> NFT launchpad.
          </h1>

          <p className={styles.description}>
          App is in development. Check back soon.
          </p>

          <div className={styles.grid}>

            <h2 className={styles.h2}>Check out our marketplace</h2>
            <a
              href="https://marketplace.unick.io"
              className={styles.card}
            >
              Marketplace.unick.io
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
