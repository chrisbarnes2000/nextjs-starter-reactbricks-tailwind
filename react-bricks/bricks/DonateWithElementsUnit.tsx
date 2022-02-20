import React, { useState, useEffect } from 'react'
import { Text, RichText, Image, types } from 'react-bricks/frontend'

// import { NextPage } from 'next'
import { Elements } from '@stripe/react-stripe-js'
import { PaymentIntent } from '@stripe/stripe-js'
import getStripe from '../../utils/get-stripejs'
import { fetchPostJSON } from '../../utils/api-helpers'
import config from '../../react-bricks/config'
import ElementsForm from '../../components/stripe/ElementsForm'

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
  const [paymentIntent, setPaymentIntent] = useState<PaymentIntent | null>(null)
  useEffect(() => {
    fetchPostJSON('/api/payment_intents', {
      amount: Math.round(config.MAX_AMOUNT / config.AMOUNT_STEP),
    }).then((data) => {
      setPaymentIntent(data)
    })
  }, [setPaymentIntent])

  return (
    <div className={`max-w-xl mx-auto px-6 ${padding === 'big' ? 'py-20' : 'py-12'}`}>
      <div className="page-container">
        <h1>Donate with Elements</h1>
        <p>Donate to our project 💖</p>
        {paymentIntent && paymentIntent.client_secret ? (
          <Elements
            stripe={getStripe()}
            options={{
              appearance: {
                variables: {
                  colorIcon: '#6772e5',
                  fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                },
              },
              clientSecret: paymentIntent.client_secret,
            }}>
            <ElementsForm paymentIntent={paymentIntent} />
          </Elements>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

//=============================
// Brick Schema
//=============================
CheckoutUnit.schema = {
  name: 'donate-with-elements-unit',
  label: 'Donate With Elements Unit',
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
