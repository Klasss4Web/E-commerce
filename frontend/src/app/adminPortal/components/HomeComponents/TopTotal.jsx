import React from "react";

export const TopTotal = ({ orders, products }) => {
  let totalSales = 0;
  if (orders) {
    orders?.map((order) =>
      order?.isPaid ? (totalSales = totalSales + order?.totalPrice) : null
    );
  }
  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-md card-animate">
          <article className="iconText">
            <span className="icon icon-sm rounded-circle alert-primary">
              <i className="text-primary fas fa-usd-circle"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Total Sales</h6>
              <span>${totalSales}</span>
            </div>
          </article>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-md card-animate">
          <article className="iconText">
            <span className="icon icon-sm rounded-circle alert-primary">
              <i className="text-primary fas fa-bags-shopping"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Total Orders</h6>
              {orders ? <span>{orders?.length}</span> : <span>0</span>}
            </div>
          </article>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-md card-animate">
          <article className="iconText">
            <span className="icon icon-sm rounded-circle alert-primary">
              <i className="text-primary fas fa-shopping-basket"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Total Products</h6>
              {products ? <span>{products?.length}</span> : <span>0</span>}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
