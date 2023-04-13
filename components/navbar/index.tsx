import { useRef } from 'react'
import { Box, Flex } from '../primitives'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { ConnectWallet, useAddress, } from "@thirdweb-dev/react";
import NavItem from './NavItem'
import ThemeSwitcher from './ThemeSwitcher'
import { useTheme } from 'next-themes'
import { useMediaQuery } from 'react-responsive'
import { useIsMounted } from 'usehooks-ts'
import styles from "../../styles/Home.module.css";


export const NAVBAR_HEIGHT = 81
export const NAVBAR_HEIGHT_MOBILE = 77



const Navbar = () => {
  const { theme } = useTheme()
  const address = useAddress();
  const isMounted = useIsMounted()

  let searchRef = useRef<HTMLInputElement>(null)

  const router = useRouter()

  if (!isMounted) {
    return null
  }

  return (
    <Flex
      css={{
        height: NAVBAR_HEIGHT,
        px: '$5',
        width: '100%',
        maxWidth: 1800,
        mx: 'auto',
        borderBottom: '1px solid $slate12',
        zIndex: 999,
        background: '$slate12',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
      }}
      align="center"
      justify="between"
    >
    <Box css={{ flex: 1 }}>
    <Flex align="center">
      <Link href="/">
        <Box css={{ width: 112, cursor: 'pointer' }}>
          {theme == 'dark' ? (
            <Image
              src="/unickLaunchpadDark.png"
              width={112}
              height={30}
              alt="Unick.io"
            />
          ) : (
            <Image
              src="/unickLaunchpadLight.png"
              width={112}
              height={30}
              alt="Unick.io"
            />
          )}
        </Box>
      </Link>
      <Box css={{ flex: 1, px: '$5', maxWidth: '60%' }}>
      </Box>
      <Flex align="center" css={{ gap: '$5', mr: '$5' }}>
        <Link href="/mintingpage">
          <NavItem active={router.pathname == '/collection-rankings'}>
            Mint
          </NavItem>
        </Link>
        <Link href="/stakingpage">
          <NavItem active={router.pathname == '/stake'}>Stake</NavItem>
        </Link>
        <Link href="https://marketplace.unick.io">
        <NavItem active={false}>Marketplace</NavItem>
      </Link>
        <Link href="https://docs.unick.io">
          <NavItem active={false}>Docs</NavItem>
        </Link>
      </Flex>
    </Flex>
  </Box>

  <Flex css={{ gap: '$3' }} justify="end" align="center">
    <ThemeSwitcher />

    <Box css={{ maxWidth: '185px' }}>
      <ConnectWallet className= {styles.connectButton}/>
    </Box>
  </Flex>
  </Flex>

  )
}

export default Navbar
