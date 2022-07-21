import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import Header from '../components/Header'
import { saveShippingAddress } from '../redux/actions/cartActions'

const ShippingScreen = ({ history }) => {

  const cart = useSelector(state=>state.cart)
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress?.address);
  const [city, setcity] = useState(shippingAddress?.city);
  const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode);
  const [country, setCountry] = useState(shippingAddress?.country);

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    const payload = {
      city,
      address,
      country,
      postalCode,
    }
    dispatch(saveShippingAddress(payload))
    history.push("/payment")
  }

  return (
    <div>
      {/* <Header /> */}
      <div className="container d-flex justify-content-center align-items-center">
        <form
          className="login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>DELIVERY ADDRESS</h6>
          <input
            type={"text"}
            placeholder="Enter address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type={"text"}
            placeholder="Enter city"
            value={city}
            required
            onChange={(e) => setcity(e.target.value)}
          />
          <input
            type={"text"}
            placeholder="Enter postal code"
            required
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <input
            type={"text"}
            placeholder="Enter country"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <button type="submit">
            {/* <Link to="/payment" className="text-white"> */}
              Continue
            {/* </Link> */}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ShippingScreen