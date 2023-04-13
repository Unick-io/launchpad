import { FC } from 'react'
import { Text, Box, Flex, Anchor, Button } from '../primitives'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Image from 'next/image'

type SectionTitleProps = {
  title: string
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => (
  <Text style="subtitle1" css={{ color: '$gray12', mb: 8 }}>
    {title}
  </Text>
)

type SectionLinkProps = {
  name: string
  href: string
}

const SectionLink: FC<SectionLinkProps> = ({ name, href }) => (
  <Anchor
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    weight="medium"
    css={{ fontSize: 14, mt: 16 }}
  >
    {name}
  </Anchor>
)

const developerSectionLinks = [
  {
    name: 'Docs',
    href: 'https://docs.unick.io',
  },
  {
    name: 'Marketplace',
    href: 'https://marketplace.unick.io',
  },
  {
    name: 'Apply for Launchpad',
    href: 'https://form.jotform.com/230854054612350',
  },
]

const companySectionLinks = [
  {
    name: 'Terms of Service',
    href: 'https://docs.unick.io/Terms-of-service',
  },
  {
    name: 'Privacy Policy',
    href: 'https://docs.unick.io/privacy-policy',
  },
]

export const Footer = () => {
  const { theme } = useTheme()
  return (
    <Flex
      justify="between"
      css={{
        pb: '$3',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 36,
        '@bp600': {
          flexDirection: 'row',
          gap: 0,
        },
      }}
    >
      <Flex css={{ gap: 80, '@bp600': { gap: 136 } }}>
        <Flex direction="column">
          <SectionTitle title="Quick Links" />
          {developerSectionLinks.map((props) => (
            <SectionLink key={props.name} {...props} />
          ))}
        </Flex>
          <Flex direction="column">
            <SectionTitle title="Legal" />
            {companySectionLinks.map((props) => (
              <SectionLink key={props.name} {...props} />
            ))}
          </Flex>
        </Flex>
        <Flex
          direction="column"
          css={{ alignItems: 'flex-start', '@bp600': { alignItems: 'flex-end' } }}
        >
        <SectionTitle title="Join Unick Community" />
        <Flex css={{ gap: '$5', mt: 16, }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/unick_io"
          >
            <Button size="xs" css={{ color: '$slate7' }}>
              <FontAwesomeIcon icon={faTwitter} width={14} height={14} />
            </Button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/Rnmut7dV"
          >
            <Button size="xs" css={{ color: '$slate7' }}>
              <FontAwesomeIcon icon={faDiscord} width={14} height={14} />
            </Button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/unick_io"
          >
            <Button size="xs" css={{ color: '$slate7' }}>
              <FontAwesomeIcon icon={faInstagram} width={14} height={14} />
            </Button>
          </a>         
        </Flex>
      </Flex>
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
    </Flex>
  )
}