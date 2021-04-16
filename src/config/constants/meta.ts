import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Fishstix Finance',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Fishstix), NFTs, and more, on a platform you can trust.',
  image: 'https://fishstix.finance/images/easter-battle.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/competition': {
    title: 'PancakeSwap Easter Battle',
    description: 'Register now for the PancakeSwap Easter battle!',
    image: 'https://pancakeswap.finance/images/easter-battle.png',
  },
}
