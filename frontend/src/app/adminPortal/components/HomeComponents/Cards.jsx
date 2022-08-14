import React from "react";
import bgOne from "./images/graphOne.jpg"
import bgTwo from "./images/graphTwo.jpg";
import bgThree from "./images/graphThree.jpg";

export const Cards = ({ orders, products }) => {
  let totalSales = 0;
  if (orders) {
    orders?.map((order) =>
      order?.isPaid ? (totalSales = totalSales + order?.totalPrice) : null
    );
  }
  return (
    <div className="row" style={{ color: "#fff" }}>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-md card-animate p-0">
          <img class="card-img card-img_bg" src={bgOne} alt="Card image" />
          <article className="iconText card-img-overlay">
            <span className="icon icon-sm rounded-circle alert-primary">
              <i className="text-primary fas fa-usd-circle"></i>
            </span>
            <div className="text">
              <h6 className="mb-1 h2">Total Sales</h6>
              <span className="h4">${totalSales}</span>
            </div>
          </article>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-md card-animate p-0">
          <img className="card-img card-img_bg" src={bgTwo} alt="Card image" />
          <article className="iconText card-img-overlay">
            <span className="icon icon-sm rounded-circle alert-primary">
              <i className="text-primary fas fa-bags-shopping"></i>
            </span>
            <div className="text">
              <h6 className="mb-1 h2">Total Orders</h6>
              {orders ? (
                <span className="h4">{orders?.length}</span>
              ) : (
                <span className="h4">0</span>
              )}
            </div>
          </article>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-md card-animate p-0">
          <img class="card-img card-img_bg" src={bgThree} alt="Card image" />
          <article className="iconText  card-img-overlay">
            <span className="icon icon-sm rounded-circle alert-primary">
              <i className="text-primary fas fa-shopping-basket"></i>
            </span>
            <div className="text">
              <h6 className="mb-1 h2">Total Products</h6>
              {products ? (
                <span className="h4">{products?.length}</span>
              ) : (
                <span className="h4">0</span>
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
