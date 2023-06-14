/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from "react";
import styles from "../../styles/Hero.module.css";
import { ConnectWallet, useMetamask, useAddress, ChainId } from "@thirdweb-dev/react";
import Link from 'next/link';
import Image from "next/image"

const Hero: FunctionComponent = () => {
  const chainId = ChainId.Mumbai;
  const address = useAddress();
  const connectWallet = useMetamask();

  const mintText = 
    "Mint the latest drop from the launchpad tab.";
  const connectionText =
    "Connect your wallet in order to interact with Unick Launchpad.";
  const stakeText =
    "Once NFTs are minted, stake them to earn ERC-20 tokens.";

  return (
    <div className={styles.container}>
        <div className={styles.wallet}>
          <ConnectWallet />
        </div>
      <div className={styles.gradient}>

        <h2>Complete the steps below to be eligible for an airdrop🚀</h2>

        {address ? (
          <div className={styles.cta}>
            
            <li style={{listStyleType: 'none'}}>
            <Link href="/mintingpage" id="launchpad">
            <div className={styles.buttonCard}>
              <h4>Mint an NFT 💎</h4>
              <p>{mintText}</p>
            </div>
            </Link>
            </li>
            <div className={styles.dashed} />
            <li style={{listStyleType: 'none'}}>
            <Link href="/stakingpage" id="stake">
            <div
              className={`${styles.buttonCard} ${
               address? "" : styles.hollow
              }`}
            >
              <h4>Stake your NFT 💰</h4>
              <p>{stakeText}</p>
            </div>
            </Link>
            </li>
            
          </div>
        ) : (
          <>            
            <div className={styles.cta}>
              <div
                onClick={() =>
                  connectWallet({
                    chainId: ChainId.Mainnet,
                  })
                }
                className={`${styles.buttonCard} ${
                  address ? "" : styles.hollow
                }`}
              >
                <h4>Connect Wallet 🔑</h4>
                <p>{connectionText}</p>
              </div>
              <div className={styles.dashed} />
              <div className={`${styles.buttonCard} ${styles.hollow}`}>
                <h4>Mint an NFT ✅</h4>
                <p>{mintText}</p>
              </div>
              <div className={styles.dashed} />
              <div className={`${styles.buttonCard} ${styles.hollow}`}>
                <h4>Stake your NFT 💰</h4>
                <p>{stakeText}</p>
              </div>
            </div>
            
          </>
        )}
      </div>
    </div>
  );
}

export default Hero;