import type { NextPage } from "next";
import { Footer } from '../components/home/Footer';
import Layout from '../components/Layout';
import Link from 'next/link'
import Image from "next/image"
import { Text, Flex } from '../components/primitives'

const Minting: NextPage = () => {
    return (
      <Layout>

           <Text> Staking Coming Soon </Text>

        <Footer />
      </Layout>
      );
    };

export default Minting;