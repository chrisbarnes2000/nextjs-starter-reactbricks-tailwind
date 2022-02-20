import { types } from 'react-bricks/frontend'
import website from 'react-bricks-ui/website'
import HeroUnit from './MyHeroUnit'
import DonateWithCheckoutUnit from './DonateWithCheckoutUnit'
import DonateWithElementsUnit from './DonateWithElementsUnit'
import ShoppingCartUnit from './use-shopping-cart'

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  HeroUnit, // Example custom brick
  // Put here your other bricks...
  DonateWithCheckoutUnit,
  DonateWithElementsUnit,
  ShoppingCartUnit,
]

export default bricks
