import React from 'react'
import { Text, RichText, Image, types } from 'react-bricks/frontend'
import { NextPage } from 'next'

import Cart from '../../components/stripe/Cart'
import CartSummary from '../../components/stripe/CartSummary'
import Products from '../../components/stripe/Products'

//=============================
// Local Types
//=============================
type Padding = 'big' | 'small'

interface HeroUnitProps {
  padding: Padding
  title: string
  text: string
}

//=============================
// Component to be rendered
//=============================
const ShoppingCartUnit: types.Brick<HeroUnitProps> = ({ padding }) => {
  return (
    <div className={`max-w-xl mx-auto px-6 ${padding === 'big' ? 'py-20' : 'py-12'}`}>
      <div className="flex flex-col items-center">
        <h1>Shopping Cart</h1>
        <p>
          Powered by the <a href="https://useshoppingcart.com">use-shopping-cart</a> React hooks library.
        </p>
        <Cart>
          <CartSummary />
          <Products />
        </Cart>
      </div>
    </div>
  )
}

//=============================
// Brick Schema
//=============================
ShoppingCartUnit.schema = {
  name: 'shopping-cart-unit',
  label: 'Shopping Unit',
  getDefaultProps: () => ({
    padding: 'big',
    title: 'Stripe Shopping Cart Unit',
  }),
  sideEditProps: [
    {
      name: 'padding',
      label: 'Padding',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'big', label: 'Big Padding' },
          { value: 'small', label: 'Small Padding' },
        ],
      },
    },
  ],
}

export default ShoppingCartUnit
