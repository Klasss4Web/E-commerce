import React, { useEffect } from 'react'
// import Header from "./../components/Header"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
} from "../redux/actions/cartActions";

const CartScreen = ({ match, location, history }) => {

  window.scrollTo(0, 0);

  const dispatch = useDispatch()
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const cart = useSelector(state=>state.cart)
  const { cartItems } = cart;

  const totalPrice = cartItems.reduce((x, y) => x + y.qty * y.price, 0).toFixed(2)

  const checkOutHandler = () => {
    history.push("/login?redirect=shipping") 
 }

   const removeFromCartHandler = (id) => {
    dispatch(removeItemFromCart(id))
 }

  useEffect(() => {
    if(productId) {
      dispatch(addItemToCart(productId, qty));
    }
  },[dispatch, productId, qty])

  console.log("qty", qty, "idddsss", productId)

  return (
    <>
      {/* <Header /> */}
      {/* CART */}
      <div className="container">
        {cartItems.length === 0 ? (
          <div className="alert alert-info text-center mt-3">
            Your cart is empty
            <Link
              className="btn btn-success mx-5 px-5 py-3"
              to="/"
              style={{ fontSize: "12px" }}
            >
              SHOPPING NOW
            </Link>
          </div>
        ) : (
          <>
            <div className="aler alert-info text-center mt-3">
              Total Cart Products
              <Link className="text-success mx-2" to="/cart">
                ({cartItems.length})
              </Link>
            </div>
            {/* cart items */}
            {cartItems.map((cartItem) => (
              <div className="cart-item-row" key={cartItem?.productId}>
                <div
                  className="remove-button d-flex justify-content-center align-items-center"
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => removeFromCartHandler(cartItem?.productId)}
                >
                  <i className="fas fa-times"></i>
                </div>
                <div className="cart-image col-md-3">
                  <img src={cartItem?.image} alt={cartItem?.name} />
                </div>
                <div className="cart-text col-md-5 d-flex align-items-center">
                  <Link to={`/products/${cartItem?.productId}`}>
                    <h4>{cartItem?.name}</h4>
                  </Link>
                </div>
                <div className="cart-qty col-md-2 col-md-5 mt-md-5 mt-3 mt-md-0">
                  <h6>QUANTITY</h6>
                  <select
                    value={cartItem?.qty}
                    onChange={(e) =>
                      dispatch(
                        addItemToCart(cartItem?.productId, e.target.value)
                      )
                    }
                  >
                    {[...Array(cartItem.countInStock).keys()].map((val) => (
                      <option key={val + 1} value={val + 1}>
                        {val + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end">
                  <h6>PRICE</h6>
                  <h4>${cartItem?.price}</h4>
                </div>
              </div>
            ))}

            {/* End of cart items */}
            <div className="total">
              <span className="sub">total:</span>
              <span className="total-price">${totalPrice}</span>
            </div>
            <hr />
            <div className="cart-buttons d-flex align-items-center row">
              <Link to="/" className="col-md-6">
                <button>Continue to shopping</button>
              </Link>
              {totalPrice > 0 && (
                <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                  <button onClick={checkOutHandler}>Checkout</button>
                </div>
              )}
            </div>
          </>
        )}
        {/*
          <div className="alert alert-info text-center mt-3">
            Your cart is empty
            <Link
              className="btn btn-success mx-5 px-5 py-3"
              to="/"
              style={{ fontSize: "12px" }}
            >
            SHOPPING NOW
            </Link>
          </div> 
         */}
      </div>
    </>
  );
}

export default CartScreen