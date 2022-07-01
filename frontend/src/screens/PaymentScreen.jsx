import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const PaymentScreen = () => {
  window.scrollTo(0, 0)

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <Header />
      <div className='container d-flex justify-content-center align-items-center login-'>
        <form
          className='login2 col-md-8 col-lg col-11'
          onSubmit={submitHandler}
        >
          <h6>SELECT PAYMENT METHOD</h6>
          <div className='payment-container'>
            <div className='radio-container'>
              <input className='form-check-input' type='radio' value='Paypal' />
              <label htmlFor="form-check-label">Paypal or Credit Card</label>
            </div>
          </div>

          <button type='submit'>
            <Link to="placeorder" className="text-white">Continue</Link>
          </button>
        </form>
      </div>
    </div>
  )
}

export default PaymentScreen
