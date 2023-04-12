import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { unlinkSync } from "fs";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="http://unick.io">Unick.io</a>! NFT launchpad.
        </h1>

        <p className={styles.description}>
        App is in development. Check back soon.
        </p>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

        <div className={styles.grid}>

          <h2>Checkout our marketplace</h2>
          <a
            href="https://marketplace.unick.io"
            className={styles.card}
          >
            Marketplace.unick.io
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
