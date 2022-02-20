import { NextPage } from 'next'
import Layout from '../components/layout'

import CheckoutForm from '../components/stripe/CheckoutForm'

const DonatePage: NextPage = () => {
  return (
    <Layout>
      <div className="page-container">
        <h1>Donate with Checkout</h1>
        <p>Donate to our project 💖</p>
        <CheckoutForm />
      </div>
    </Layout>
  )
}

export default DonatePage
