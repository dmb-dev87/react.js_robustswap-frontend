import { MenuEntry } from '../../uikit/widgets/Menu'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Exchange',
    icon: 'ExchangeIcon',
    href: '/swap',
  },
  {
    label: 'Farm',
    icon: 'FarmIcon',
    href: '/farm',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: '/referrals',
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    href: '/audit',
  },
  {
    label: 'Features',
    icon: 'FeatureIcon',
    items: [
      {
        label: 'Configurability',
        href: '/Configurability',
      },
      {
        label: 'Transaction Limit',
        href: '/tranlimit',
      },
      {
        label: 'Transaction Tax',
        href: '/trantax',
      },
      {
        label: 'Liquidity Generation',
        href: '/liquidity',
      },
      {
        label: 'Reward Lockup',
        href: '/reward',
      },
      {
        label: 'Maximum Supply',
        href: '/maxsupply',
      },
      {
        label: 'Automatic Burning',
        href: '/autoburn',
      },
      {
        label: 'Buyback and Burn',
        href: '/buyban-burn',
      },
    ],
  },
  {
    label: 'Listings',
    icon: 'ListingIcon',
    href: '/listings',
    items: [
      {
        label: 'BSCScan',
        href: '/bscscan',
      },
      {
        label: 'DappRadar',
        href: '/dappradar',
      },
      {
        label: 'Coingecko',
        href: '/coingecko',
      },
      {
        label: 'CoinMarketCap',
        href: '/coinmarketcap',
      },
      {
        label: 'LiveCoinWatch',
        href: '/livecoingwatch',
      },
      {
        label: 'Vfat',
        href: '/vfat',
      }
    ],
  },
  {
    label: 'Chart',
    icon: 'ChartIcon',
    href: '/chart',
    items: [
      {
        label: 'Poocoin',
        href: '/poocoin',
      },
      {
        label: 'DexTools',
        href: '/dextool',
      },
      {
        label: 'DexGuru',
        href: '/dexguru',
      },
      {
        label: 'Bogged',
        href: '/bogged',
      }
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    href: '/',
    items: [
      {
        label: 'GitHub',
        href: '/',
      },
      {
        label: 'GitBook',
        href: '/',
      },
      {
        label: 'Roadmap',
        href: '/',
      },
      {
        label: 'Voting',
        href: '/',
      },
      {
        label: 'Videos',
        href: '/',
      }
    ],
  },

]

export default config
