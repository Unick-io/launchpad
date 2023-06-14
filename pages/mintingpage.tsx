import type { NextPage } from "next";
import Layout from '../components/Layout';
import Link from 'next/link'
import Image from "next/image"
import styles from "../styles/MintPage.module.css";



const MintingPage: NextPage = () => {
    return (
      <Layout>
      <div className={styles.containerTop}>
          <video 
          className={styles.video}
          onContextMenu={e => e.preventDefault()}
          controls
          controlsList="nodownload"
          height={400}
          width={400}
          src="/unickmembermovie.mov"
          
        />
          <Image className={styles.launchpadBanner}
          src="/unickMintBanner.png"
          alt="unick-Mint-Banner"
          width={1500}
          height={400}
          quality={100}
          priority
        />
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
          <Link className={styles.mintInfoContainer} 
          href="https://form.jotform.com/230854054612350" 
          rel="noopener noreferrer"
          target="blank"
          id="launchpad form">
                <div className={styles.infoSide}>
                  <h1>Your Collection</h1>
                  <p className={styles.description}>
                    Apply for a launchpad to appear here
                  </p>
                </div>
        
                  <div className={styles.imageSide}>
                        {/* Image Preview of NFTs */}
                    <Image
                      className={styles.image}
                      src='/../public/unickLaunchpadLight.png'
                      alt= "preview image"
                      height={50}
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

export default MintingPage;