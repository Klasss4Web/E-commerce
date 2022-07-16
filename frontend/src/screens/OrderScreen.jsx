import React from "react";
import Header from "../components/Header";
import { PayPalButton } from "react-paypal-button-v2";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrderDetailsAction } from "../redux/actions/orderActions";
import Loading from "../components/loadingError/Loading";
import Message from "../components/loadingError/Error";
import moment from "moment"

export const OrderScreen = ({ match }) => {
  window.scroll(0, 0);

  const orderId = match.params.id;
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, error, loading } = orderDetails;

 
  // order.shippingPrice = addDecimals(cart?.itemsPrice > 100 ? 0 : 100);

  if(!loading){
    //Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item?.price * item?.qty, 0)
    );
  }

  useEffect(() => {
    dispatch(getOrderDetailsAction(orderId));
  }, [dispatch, orderId]);
  return (
    <div>
      <Header />
      <div className="container">
        {loading && <Loading />}
        {error && <Message variant="alert-danger">{error}</Message>}
        <div className="row order-detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="aler-success order-box">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Customer</strong>
                </h5>
                <p>{order?.user?.name}</p>
                <p>
                  <a href={`mailto: ${order?.user?.email}`}>
                    {order?.user?.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="aler-success order-box">
                  <i className="fas fa-truck-moving"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Order info</strong>
                </h5>
                <p>Shipping: {order?.shippingAddress?.country}</p>
                <p>Pay method: {order?.paymentMethod}</p>

                {order?.isPaid ? (
                  <div className="bg-info p-2 col-12">
                    <p className="text-white text-center text-sm-start">
                      Paid on {moment(order?.paidAt).calendar()}
                    </p>
                  </div>
                ) : (
                  <div className="bg-danger p-2 col-12">
                    <p className="text-white text-center text-sm-start">
                      Not Paid
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Deliver to</strong>
                </h5>
                <p>
                  Address: {order?.shippingAddress?.city},{" "}
                  {order?.shippingAddress?.address}{" "}
                  {order?.shippingAddress?.postalCode}
                </p>
                {order?.isDelivered ? (
                  <div className="bg-info p-2 col-12">
                    <p className="text-white text-center text-sm-start">
                      Delivered on {moment(order?.deliveredAt).calendar()}
                    </p>
                  </div>
                ) : (
                  <div className="bg-danger p-2 col-12">
                    <p className="text-white text-center text-sm-start">
                      Not Delivered
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="row order-products justify-content-between">
          <div className="col-lg-8">
            {order?.orderItems.lenggth === 0 ? (
              <Message variant="alert-info mt-5">Your order is empty</Message>
            ) : (
              <>
                {order?.orderItems?.map((item, index) => (
                  <div className="order-product row" key={index}>
                    <div className="col-md-3 col-6">
                      <img src={item?.image} alt={item?.name} />
                    </div>
                    <div className="col-md-5 col-6 d-flex align-items-center">
                      <Link to={`/products/${item?.productId}`}>
                        <h6>{item?.name}</h6>
                      </Link>
                    </div>
                    <div className="mt-3 mt-md-0 col-md-2 col-6 d-flex align-items-center flex-column">
                      <h4>Quantity</h4>
                      <h4>{item?.qty}</h4>
                    </div>
                    <div className="mt-3 mt-md-0 col-md-2 col-6 d-flex align-items-center flex-column">
                      <h4>Subtotal</h4>
                      <h4>{item?.qty * item?.price}</h4>
                    </div>
                  </div>
                ))}
              </>
            )}
{/* 
            <div className="order-product-row">
              <div className="col-md-3 col-6">
                <img src="/images/4.png" alt="product" />
              </div>
              <div className="col-md-5 col-6 d-flex align-items-center">
                <Link to={"/"}>
                  <h6>Girls Nike Shoes</h6>
                </Link>
              </div>
              <div className="mt-3 mt-d-0 col-md-2 d-flex align-items-center">
                <h4>QUANTITY</h4>
                <h6>10</h6>
              </div>
              <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end d-flex">
                <h4>SUBTOTAL</h4>
                <h6>$1000</h6>
              </div>
            </div> */}
          </div>

          {/* Total */}
          <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Products</strong>
                  </td>
                  <td>${order?.itemsPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Shipping</strong>
                  </td>
                  <td>${order?.shippingPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Tax</strong>
                  </td>
                  <td>${order?.taxPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>${order?.totalPrice}</td>
                </tr>
              </tbody>
            </table>
            <div className="col-12">
              <PayPalButton amount={345} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
