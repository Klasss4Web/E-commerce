import React from 'react'
import { Link } from "react-router-dom"
import moment from "moment"

export const RatingsTable = ({ orders }) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Product</th>
          <th scope="col">MerchantId</th>
          <th scope="col">Date</th>
          <th scope="col">Rating</th>
          <th scope="col" className="text-end">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {orders?.map((order) => (
          <tr key={order?._id}>
            <td>
              <b>{order?.user?.name}</b>
            </td>
            <td>{order?.user?.email}</td>
            <td>{order?.user?.product}</td>
            <td>{order?.totalPrice}</td>

            <td>{moment(order?.createdAt).format("MMM Do YY")}</td>
            <td>
              {order?.isDelivered ? (
                <span
                  className="alert-success"
                  style={{ borderRadius: "5px", padding: "2px 5px" }}
                >
                  Delivered
                </span>
              ) : (
                <span
                  className="alert-danger"
                  style={{
                    borderRadius: "5px",
                    padding: "2px 5px",
                    background: "grey",
                    color: "#fff",
                  }}
                >
                  Not Delivered
                </span>
              )}
            </td>
            <td className="d-flex justify-content-center align-item-center">
              <Link to={`/order/${order?._id}`} className="text-success">
                <i className="fas fa-eye"></i>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
