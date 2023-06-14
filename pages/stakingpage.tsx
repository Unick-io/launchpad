import type { NextPage } from "next";
import Layout from '../components/Layout';
import Link from 'next/link'
import Image from "next/image"
import styles from "../styles/StakingPage.module.css";

const Staking: NextPage = () => {
    return (
      <Layout>  
      <div className={styles.container}> 
        <h1>Stake NFTs to earn ERC-20 tokens</h1>
        </div>
          <div className={styles.container}> 
            <div>
              <Link className={styles.mintInfoContainer} href="/unick" id="unick membership">
                <div className={styles.infoSide}>
                  <h1>Unick Member Pass ✪</h1>
                  <p className={styles.description}>
                    Description goes here
                  </p>
                </div>
                  <div className={styles.imageSide}>
                        {/* Image Preview of NFTs */}
                    <Image
                      className={styles.image}
                      src='/../public/unickMember.jpg'
                      alt= "preview image"
                      height={200}
                      width={200}
                      priority
                    />
                  </div>
                </Link>
              </div>
          <div>
          <Link className={styles.mintInfoContainer} href="/stake" id="blockheads">
                <div className={styles.infoSide}>
                  <h1>Blockheads OG Club ✪</h1>
                  <p className={styles.description}>
                    Description goes here
                  </p>
                </div>
        
                  <div className={styles.imageSide}>
                        {/* Image Preview of NFTs */}
                    <Image
                      className={styles.image}
                      src='/../public/bogc1.png'
                      alt= "preview image"
                      height={200}
                      width={200}
                      priority
                    />
                  </div>
                </Link>
              </div>
        </div>
        
      </Layout>
      );
    };

export default Staking;