import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0x63802aF1f00eEA04Ab93b49B19581177bc5CA104',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'QuickSwap',
        href: 'https://info.quickswap.exchange/token/0x63c5bc1dbe2539c06ee29e776fd35b47ba488a21',
      },
      {
        label: 'PolyChart',
        href: 'https://app.polychart.io/explorer/polygon/0x51ed72c3b89a042385e53e4ee85fea18d210ff61',
      }
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Polyion',
      },
      {
        label: 'Docs',
        href: 'https://polyion.gitbook.io/polyion-doc/',
      },
      {
        label: 'Vfat-tool',
        href: 'https://vfat.tools/polygon/polyion/',
      }
    ],
  },
  {
    label: 'Audit by TechRate coming',
    icon: 'AuditIcon',
    href: 'https://techrate.org/',
  },
]

export default config
