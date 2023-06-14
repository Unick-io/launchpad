import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Footer } from '../components/home/Footer';
import Hero from '../components/home/Hero';
import Layout from '../components/Layout';
import Link from 'next/link'
import Image from "next/image"
import { useAddress } from "@thirdweb-dev/react";

const Home: NextPage = () => {
  const address = useAddress();
  return (
    <Layout>
    
      <div className={styles.container}>
      <div>
      <ul style={{listStyleType: 'none'}}>
        <li>
          <Link href="/unick" id="unick membership">
            <div>
              <Image className={styles.launchpadBanner}
                src="/unicMintBanner.png"
                alt="unick-Mint-Banner"
                width={1600}
                height={400}
                quality={100}
                priority
              />

              <div className={styles.topBottomLeft}>
                <video
                  className= {styles.video}
                  onContextMenu={e => e.preventDefault()}
                  controls
                  controlsList="nodownload"
                  height={200}
                  width={200}
                  src="/unickMemberNft.mov"
                  
                />
                <h1 className={styles.bannerTitle}>
                  Unick Pass ✪
                </h1>
                <p className={styles.bannerStats}>By Unick.io</p>
                <p className={styles.bannerStats}>Open Edition · 0.01Ξ </p>
              </div>
              <div className={styles.bannerButtons}>
                <p className={`${styles.bannerLive} ${styles.glowGreen}`}>
                  MINTING NOW
                </p>
                <div className={styles.bottomRight}>
                  View Drop
                </div>
              </div>
            </div>
          </Link>
        </li>
      </ul>
  </div>
      <main className={styles.main}>
      {address ? (
        <h1 className={styles.title}>
        Welcome to <a href="http://unick.io">Unick.io</a> NFT launchpad.
      </h1>
        ):(
        <h1 className={styles.title}>
        Connect your <a>wallet</a> in order to interact with the launchpad.
        </h1>)}
        <Hero />

        <h2 className={styles.veryBigSpacerTop}>Upcoming Drops 🚨 </h2>
          <h3 className={styles.bigSpacerTop}>To be confirmed</h3>
            <div className={`${styles.launchpadBanner} ${styles.spacerTop}`}>
              <ul style={{listStyleType: 'none'}}>
                <li>
                  <Link href="/BOGC" id="blockheads og club">
                    <div>
                      <Image
                        className={styles.mintContainer}
                        src=""
                        alt="banner"
                        width={1600}
                        height={500}
                        quality={100}
                        priority
                      />
                      <div className={styles.bottomLeft}>
                        <Image
                          src=""
                          alt=""
                          height="200"
                          width="200"
                        />
                        <h1 className={styles.bannerTitle}>
                          Blockheads <br />OG Club ✪
                        </h1>
                        <p className={styles.bannerStats}>By UnickLabs</p>
                        <p className={styles.bannerStats}>8888 items · 0.007Ξ </p>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
      </main>
      <Footer />
    </div>
  </Layout>
  );
};

export default Home;
