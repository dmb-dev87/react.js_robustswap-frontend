import { MenuEntry } from '../../uikit/widgets/Menu'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://pantherswap.com/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://pantherswap.com/pools',
  },
  {
    label: 'Jungles',
    icon: 'JungleIcon',
    href: 'https://pantherswap.com/jungles',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://pantherswap.com/lottery',
  },
  {
    label: 'IPO',
    icon: 'IfoIcon',
    href: 'https://pantherswap.com/ipo',
  },
  {
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: 'https://pantherswap.com/referrals',
  },
  {
    label: 'Audits',
    icon: 'ShieldIcon',
    href: 'https://docs.pantherswap.com/security/audits',
  },
  {
    label: 'Features',
    icon: 'FeatureIcon',
    items: [
      {
        label: 'Automatic LP',
        href: 'https://docs.pantherswap.com/tokenomics/automatic-liquidity',
      },
      {
        label: 'Automatic Burning',
        href: 'https://docs.pantherswap.com/tokenomics/automatic-burning',
      },
      {
        label: 'Harvest Lockup',
        href: 'https://docs.pantherswap.com/tokenomics/harvest-lockup',
      },
      {
        label: 'Anti-Whale',
        href: 'https://docs.pantherswap.com/tokenomics/anti-whale',
      },
    ],
  },
  {
    label: 'Listings',
    icon: 'ListingIcon',
    items: [
      {
        label: 'BscScan',
        href: 'https://bscscan.com/token/0x1f546ad641b56b86fd9dceac473d1c7a357276b7',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/binance-smart-chain/defi/pantherswap',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/pantherswap',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/pantherswap/',
      },
      {
        label: 'LiveCoinWatch',
        href: 'https://www.livecoinwatch.com/price/PantherSwap-PANTHER',
      },
      {
        label: 'Vfat',
        href: 'https://vfat.tools/bsc/panther',
      },
    ],
  },
  {
    label: 'Analytics',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pantherswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://pantherswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://pantherswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://pantherswap.info/accounts',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pantherswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.pantherswap.com',
      },
      {
        label: 'Roadmap',
        href: 'https://docs.pantherswap.com/roadmap',
      },
      {
        label: 'Blog',
        href: 'https://pantherswap.medium.com',
      },
      {
        label: 'Voting',
        href: 'https://voting.pantherswap.com/',
      },
    ],
  },
]

export default config
