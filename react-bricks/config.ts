import Router from 'next/router'
import { types } from 'react-bricks/frontend'

import bricks from './bricks'
import pageTypes from './pageTypes'
import NextLink from './NextLink'

interface ModifiedInterface extends types.ReactBricksConfig {
  // Set your amount limits: Use float for decimal currencies and
  // Integer for zero-decimal currencies: https://stripe.com/docs/currencies#zero-decimal.
  CURRENCY: string
  MIN_AMOUNT: number
  MAX_AMOUNT: number
  AMOUNT_STEP: number
}

const config: ModifiedInterface = {
  appId: process.env.NEXT_PUBLIC_APP_ID,
  apiKey: process.env.API_KEY,
  pageTypes,
  bricks,
  logo: '/logo.svg',
  // contentClassName: 'content', // Defined dynamically
  // isDarkColorMode: ...,        // in _app.tsx
  // toggleColorMode: ...,        // to manage Dark Mode
  renderLocalLink: NextLink,
  navigate: (path: string) => Router.push(path),
  loginPath: '/admin',
  editorPath: '/admin/editor',
  playgroundPath: '/admin/playground',
  appSettingsPath: '/admin/app-settings',
  useCssInJs: false,
  appRootElement: '#__next',
  clickToEditSide: types.ClickToEditSide.BottomRight,
  customFields: [],
  //responsiveBreakpoints: [{ type: types.DeviceType.Phone, width: 480, label: 'Smartphone'}],
  enableAutoSave: true,
  disableSaveIfInvalidProps: false,
  CURRENCY: 'usd',
  MIN_AMOUNT: 10.0,
  MAX_AMOUNT: 10000.0,
  AMOUNT_STEP: 5.0,
}

export default config
