import moment from 'moment';
import React from 'react'
import { Link } from 'react-router-dom';
import Message from '../loadingError/Error';
import Loading from '../loadingError/Loading';

export const LatestOrders = ({ loading, error, orders }) => {

  return (
    <div className="card-body">
      <h5 className="card-title">Latest Orders</h5>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant={"alert-danger"}>{error}</Message>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <tbody>
              {orders.slice(0, 5)?.map((order) => (
                <tr key={order?._id}>
                  <td>
                    <b>{order?.user?.name}</b>
                  </td>
                  <td>{order?.user?.email}</td>
                  <td>${order?.totalPrice}</td>
                  <td>
                    {order?.isPaid ? (
                      <span className="rounded-pill alert-success px-2">
                        Paid At {moment(order?.paidAt).format("MMM Do YY")}
                      </span>
                    ) : (
                      <span className="rounded-pill alert-danger px-2">
                        {" "}
                        Not Paid
                      </span>
                    )}
                  </td>
                  <td>
                    {" "}
                    {order?.isDelivered ? (
                      <span className="rounded-pill alert-success px-2">
                        Delivered At{" "}
                        {moment(order?.isDelivered).format("MMM Do YY")}
                      </span>
                    ) : (
                      <span className="rounded-pill alert-danger px-2">
                        {" "}
                        Not Delivered
                      </span>
                    )}
                  </td>
                  <td className="d-flex justify-content-end align-item-center">
                    <Link to={`/order/${order._id}`} className="text-success">
                      <i className="fas fa-eye"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
