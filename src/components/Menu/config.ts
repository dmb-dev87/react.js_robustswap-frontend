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
    href: '/',
  },
  {
    label: 'Farm',
    icon: 'FarmIcon',
    href: '/',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/',
  },
  {
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: '/',
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    href: '/',
  },
  {
    label: 'Features',
    icon: 'FeatureIcon',
    items: [
      {
        label: 'Configurability',
        href: '/',
      },
      {
        label: 'Transaction Limit',
        href: '/',
      },
      {
        label: 'Transaction Tax',
        href: '/',
      },
      {
        label: 'Liquidity Generation',
        href: '/',
      },
      {
        label: 'Reward Lockup',
        href: '/',
      },
      {
        label: 'Maximum Supply',
        href: '/',
      },
      {
        label: 'Automatic Burning',
        href: '/',
      },
      {
        label: 'Buyback and Burn',
        href: '/',
      },
    ],
  },
  {
    label: 'Listings',
    icon: 'ListingIcon',
    href: '/',
    items: [
      {
        label: 'BSCScan',
        href: '/',
      },
      {
        label: 'DappRadar',
        href: '/',
      },
      {
        label: 'Coingecko',
        href: '/',
      },
      {
        label: 'CoinMarketCap',
        href: '/',
      },
      {
        label: 'LiveCoinWatch',
        href: '/',
      },
      {
        label: 'Vfat',
        href: '/',
      }
    ],
  },
  {
    label: 'Chart',
    icon: 'ChartIcon',
    href: '/',
    items: [
      {
        label: 'Poocoin',
        href: '/',
      },
      {
        label: 'DexTools',
        href: '/',
      },
      {
        label: 'DexGuru',
        href: '/',
      },
      {
        label: 'Bogged',
        href: '/',
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
