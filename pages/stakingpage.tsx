import type { NextPage } from "next";
import Layout from '../components/Layout';
import Link from 'next/link'
import Image from "next/image"
import { Text } from '../components/primitives'

const Staking: NextPage = () => {
    return (
      <Layout>
        <Text css={{color: '$slate1'}}> Staking Coming Soon </Text>
      </Layout>
      );
    };

export default Staking;