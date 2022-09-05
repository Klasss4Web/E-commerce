import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import Header from '../components/Header'
import { savePaymentMethod } from '../../../redux/actions/cartActions';

const PaymentScreen = ({ history }) => {
  window.scrollTo(0, 0)

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if(!shippingAddress) {
    history.push("/shipping")
  }

  const dispatch = useDispatch()
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push("/placeorder")
  }

  return (
    <div>
      {/* <Header /> */}
      <div className="container d-flex justify-content-center align-items-center login-">
        <form
          className="login2 col-md-8 col-lg col-11"
          onSubmit={submitHandler}
        >
          <h6>SELECT PAYMENT METHOD</h6>
          <div className="payment-container mt-3">
            <div className="radio-container mb-4">
              <input
                style={{ marginRight: "5px", marginLeft: "15px" }}
                className="form-check-input"
                name="payment"
                type="radio"
                value={"Paypal"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="form-check-label">Paypal</label>
              <input
                style={{ marginRight: "5px", marginLeft: "15px" }}
                className="form-check-input"
                name="payment"
                type="radio"
                value={"Stripe"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="form-check-label">Stripe</label>
              <input
                style={{ marginRight: "5px", marginLeft: "15px" }}
                className="form-check-input"
                name="payment"
                type="radio"
                value={"Paystack"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="form-check-label">Paystack</label>
              <input
                style={{ marginRight: "5px", marginLeft: "15px" }}
                className="form-check-input"
                name="payment"
                type="radio"
                value={"Flutterwave"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="form-check-label">Flutterwave</label>
            </div>
          </div>

          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
}

export default PaymentScreen
