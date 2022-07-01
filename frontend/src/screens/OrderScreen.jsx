import React from 'react'
import Header from '../components/Header'
import { PayPalButton } from "react-paypal-button-v2"
import { Link } from 'react-router-dom'

export const OrderScreen = () => {
  window.scroll(0, 0)
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row order-detail'>
          <div className='col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0'>
            <div className='row'>
              <div className='col-md-4 center'>
                <div className='aler-success order-box'>
                  <i className='fas fa-user'></i>
                </div>
              </div>
              <div className='col-md-8 center'>
                <h5>
                  <strong>Customer</strong>
                </h5>
                <p>
                  <a href={`mailto: admin@example.com`}>admin@example.com</a>
                </p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className='col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0'>
            <div className='row'>
              <div className='col-md-4 center'>
                <div className='aler-success order-box'>
                  <i className='fas fa-truck-moving'></i>
                </div>
              </div>
              <div className='col-md-8 center'>
                <h5>
                  <strong>Order info</strong>
                </h5>
                <p>Shipping: Nigeria</p>
                <p>Pay method: Paypal</p>

                <div className='bg-info p-2 col-12'>
                  <p className='text-white text-center text-sm-start'>
                    Paid on June 12 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className='col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0'>
            <div className='row'>
              <div className='col-md-4 center'>
                <div className='alert-success order-box'>
                  <i className='fas fa-map-marker-alt'></i>
                </div>
              </div>
              <div className='col-md-8 center'>
                <h5>
                  <strong>Deliver to</strong>
                </h5>
                <p>Address: Lekki-Ajah Expressway, Ajah</p>
                <div className='bg-danger p-1 col-12'>
                  <p className='text-white text-center text-sm-start'>
                    Not Delivered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row order-products justify-content-between'>
          <div className='col-lg-8'>
            {/* <Message variant="alert-info mt-5">Your order is empty</Message> */}
            <div className='order-product-row'>
              <div className='col-md-3 col-6'>
                <img src="/images/4.png" alt="product" />
              </div>
              <div className='col-md-5 col-6 d-flex align-items-center'>
                <Link to={"/"}>
                  <h6>Girls Nike Shoes</h6>
                </Link>
              </div>
              <div className='mt-3 mt-d-0 col-md-2 d-flex align-items-center'>
                <h4>QUANTITY</h4>
                <h6>10</h6>
              </div>
              <div className='mt-3 mt-md-0 col-md-2 col-6 align-items-end d-flex'>
              <h4>SUBTOTAL</h4>
                <h6>$1000</h6>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className='col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order'>
            <table className='table table-bordered'>
              <tbody className=''>
                <tr>
                  <td>
                    <strong>Products</strong>
                  </td>
                  <td>$1200</td>
                </tr>
                <tr>
                  <td>
                    <strong>Shipping</strong>
                  </td>
                  <td>$2000</td>
                </tr>
                <tr>
                  <td>
                    <strong>Tax</strong>
                  </td>
                  <td>$3</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>$2200</td>
                </tr>
              </tbody>
              <div className='col-12'>
                <PayPalButton amount={345} />
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
