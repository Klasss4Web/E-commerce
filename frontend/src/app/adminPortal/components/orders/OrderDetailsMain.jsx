import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { admiGetOrderDetailsAction } from '../../../../redux/actions/orderActions';
import Message from '../loadingError/Error';
import Loading from '../loadingError/Loading';
import { OrderDetailProducts } from './OrderDetailProducts';
import { OrderDetailsInfo } from './OrderDetailsInfo';
import moment from "moment";


export const OrderDetailsMain = ({ orderId }) => {

  const dispatch = useDispatch()

  const orderDetails = useSelector(state=>state.adminOrderDetails)
  const { loading, error, order } = orderDetails

  useEffect(()=>{
    dispatch(admiGetOrderDetailsAction(orderId));
  },[orderId, dispatch])

  return (
    <section className="content-main">
      <div className="content-header">
        <Link className="btn btn-dark text-white" to="/orders">
          Back To Orders
        </Link>
      </div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant={"alert-danger"}>{error}</Message>
      ) : (
        <div className="card">
          <header className="card-header p-3 header-brand">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <span>
                  <i className="far fa-calendar-alt mx-2"></i>
                  <b className="text-white">
                    {moment(order?.createdAt).format("llll")}
                  </b>
                </span>
                <br />
                <small className="text-white mx-3">
                  Order ID: {order?._id}
                </small>
              </div>
              <div className="col-lg-6 col-md-6 ms-auto d-flex justify-content-end align-item-center">
                <select
                  className="form-select d-inline-block"
                  style={{ maxidth: "200px" }}
                >
                  <option>Change status</option>
                  <option>Awaiting payment</option>
                  <option>Confirmed payment</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                </select>
                <Link className="btn btn-success mr-2" to="#">
                  <i className="fas fa-print"></i>
                </Link>
              </div>
            </div>
          </header>
          <div className="card-body">
            {/* Order Information */}
            <OrderDetailsInfo order={order} />
            <div className="row">
              <div className="col-lg-9">
                <div className="table-responsive">
                  <OrderDetailProducts order={order} loading={loading} />
                </div>
              </div>
              {/* Payment Information */}
              <div className="col-lg-3">
                <div className="box shadow-sm bg-light">
                  <button className="btn btn-dark col-12">
                    Mark as Delovered
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
