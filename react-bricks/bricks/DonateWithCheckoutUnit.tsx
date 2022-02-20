import React from 'react'
import { Text, RichText, Image, types } from 'react-bricks/frontend'

// import { NextPage } from 'next'
import CheckoutForm from '../../components/stripe/CheckoutForm'

//=============================
// Local Types
//=============================
type Padding = 'big' | 'small'

interface CheckoutUnitProps {
  padding: Padding
  title: string
}

//=============================
// Component to be rendered
//=============================
const CheckoutUnit: types.Brick<CheckoutUnitProps> = ({ padding }) => {
  return (
    <div className={`max-w-xl mx-auto px-6 ${padding === 'big' ? 'py-20' : 'py-12'}`}>
      <div className="page-container">
        <h1>Donate with Checkout</h1>
        <p>Donate to our project 💖</p>
        <CheckoutForm />
      </div>
    </div>
  )
}

//=============================
// Brick Schema
//=============================
CheckoutUnit.schema = {
  name: 'donate-with-checkout-unit',
  label: 'Donate With Checkout Unit',
  getDefaultProps: () => ({
    padding: 'big',
    title: 'This is a stripe check Unit',
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

export default CheckoutUnit
