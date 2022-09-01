import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/loadingError/Error";
import { createOrderAction } from "../../../redux/actions/orderActions";
import { ORDER_CREATE_RESET } from "../../../redux/constants/orderConstants";
// import Header from "./../components/Header";

export const PlaceOrderScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { shippingAddress, paymentMethod, cartItems } = cart;

  //Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cartItems.reduce((acc, item) => acc + item?.price * item?.qty, 0)
  );
  cart.shippingPrice = addDecimals(cart?.itemsPrice > 100 ? 0 : 100);
  cart.taxPrice = addDecimals(Number((0.15 * cart?.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart?.itemsPrice) +
    Number(cart?.shippingPrice) +
    Number(cart?.taxPrice)
  ).toFixed(2);

  const createOrders = useSelector((state) => state.createOrders);

  const { order, success, error } = createOrders;
  // console.log("orders", order)

  const handlePlaceOrder = (e) => {
    e.preventDefault();
   dispatch(createOrderAction({
      orderItems: cart.cartItems,
      shippingAddress: cart.shippingAddress,
      paymentMethod: cart.paymentMethod,
      itemsPrice: cart.itemsPrice,
      shippingPrice: cart.shippingPrice,
      taxPrice: cart.taxPrice,
      totalPrice: cart.totalPrice,
    }));
    // dispatch();
  };

  useEffect(() => {
    if (success) {
      history.push(`/order/${order?._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [history, dispatch, success, order]);

  console.log(cartItems);

  return (
    <>
      {/* <Header /> */}
      <div className="container mt-4">
        <div className="row order-detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box d-flex justify-content-center py-2 rounded-circle">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Customer</strong>
                </h5>
                <p>{userInfo?.name}</p>
                <p>{userInfo?.email}</p>
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box d-flex justify-content-center py-2 rounded-circle">
                  <i className="fas fa-truck-moving"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Order Information</strong>
                </h5>
                <p>Shipping: {shippingAddress?.country}</p>
                <p>Order Method: {paymentMethod}</p>
              </div>
            </div>
          </div>
          {/* Column 3 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box d-flex justify-content-center py-2 rounded-circle">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Deliver To:</strong>
                </h5>
                <p>
                  Address: {shippingAddress?.city}, {shippingAddress?.address},{" "}
                  {shippingAddress?.postalCode}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row order-products justify-content-between">
          <div className="col-lg-8">
            {cartItems?.length === 0 ? (
              <Message variant="alert-info mt-5">Your cart is empty</Message>
            ) : (
              <>
                {cartItems?.map((item, index) => (
                  <div className="order-product row mb-3" key={index}>
                    <div
                      className="col-md-3 col-6"
                      style={{ marginRight: "20px" }}
                    >
                      <img
                        src={item?.image}
                        alt={item?.name}
                        width="100%"
                        style={{ borderRadius: "10px" }}
                      />
                    </div>
                    <div className="col-md-4 col-6 d-flex flex-column">
                      <Link to={`/products/${item?.productId}`}>
                        <h6>{item?.name}</h6>
                      </Link>
                      <h6 className="mt-2">
                        Status: <span style={{ color: "red" }}>Not Paid</span>
                      </h6>
                    </div>
                    <div className="mt-3 mt-md-0 col-md-2 col-6 d-flex align-items-center flex-column">
                      <h5>Quantity</h5>
                      <h5>{item?.qty}</h5>
                    </div>
                    <div className="mt-3 mt-md-0 col-md-2 col-6 d-flex align-items-center flex-column">
                      <h5>Subtotal</h5>
                      <h5>{item?.qty * item?.price}</h5>
                    </div>
                  </div>
                ))}
              </>
            )}
            {/* <Message variant="alert-info mt-5">Your cart is empty</Message> */}
          </div>
          {/* Total */}
          <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Products</strong>
                  </td>
                  <td>${cart?.itemsPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Shipping</strong>
                  </td>
                  <td>${cart?.shippingPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Tax</strong>
                  </td>
                  <td>${cart?.taxPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>${cart?.totalPrice}</td>
                </tr>
              </tbody>
            </table>
            {cartItems?.length === 0 ? null : (
              <button type="submit" onClick={handlePlaceOrder}>
                PLACE ORDER
              </button>
            )}
            {error && (
              <div className="my-3 col-12">
                <Message variant="alert-danger">{error}</Message>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
