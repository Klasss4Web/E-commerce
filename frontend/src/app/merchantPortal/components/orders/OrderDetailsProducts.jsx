import React from 'react'
import { Link } from 'react-router-dom';

export const OrderDetailsProducts = ({ order, loading }) => {

  if(!loading){
    const addDecimals = (num) => {
      return Math.round((num*100) / 100).toFixed(2)
    }

    order.itemPrice = addDecimals(
      order?.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
  }

  return (
    <div>
      <table className="table-border table-lg">
        <thead>
          <tr>
            <th style={{ width: "40%" }}>Product</th>
            <th style={{ width: "20%" }}>Unit Price</th>
            <th style={{ width: "20%" }}>Quantity</th>
            <th style={{ width: "20%" }}>Total</th>
          </tr>
        </thead>
      </table>
      <tbody>
        {order?.orderItems?.map((item, index) => (
          <tr key={index}>
            <td>
              <Link className="itemside" to="#">
                <div className="left">
                  <img
                    src={item?.image}
                    alt={item?.name}
                    style={{ height: "40px", width: "40px" }}
                    className="img-xs"
                  />
                </div>
                <p className="info">{item?.name}</p>
              </Link>
            </td>
            <td>${item?.price}</td>
            <td>{item?.qty}</td>
            <td>{item?.qty * item?.price}</td>
          </tr>
        ))}

        <tr>
          <td colSpan={"4"}>
            <article className="float-end">
              <dl className="dlist">
                <dt>Subtotal:</dt>
                <dd>${order?.itemsPrice}</dd>
              </dl>
              <dl className="dlist">
                <dt>Shipping Cost:</dt>
                <dd>${order?.shippingPrice}</dd>
              </dl>
              <dl className="dlist">
                <dt>Grand Total:</dt>
                <dd>${order?.totalPrice}</dd>
              </dl>
              <dl className="dlist">
                <dt className="text-muted">Status:</dt>
                <dd>
                  {order?.isPaid ? (
                    <span className="badge rounded-pill alert alert-success text-success">
                      Payment done
                    </span>
                  ) : (
                    <span className="badge rounded-pill alert alert-danger text-danger">
                      Not Paid
                    </span>
                  )}
                </dd>
              </dl>
            </article>
          </td>
        </tr>
      </tbody>
    </div>
  );
}
