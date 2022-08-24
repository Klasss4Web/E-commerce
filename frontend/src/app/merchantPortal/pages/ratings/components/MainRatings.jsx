import React, { useEffect } from "react";

import { RatingsTable } from "./RatingsTable";

export const MainRatings = ({ orderId }) => {


  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Ratings</h2>
      </div>
      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type={"text"}
                placeholder="Search..."
                className="form-control p-2"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>5 Star</option>
                <option>4 Star</option>
                <option>3 Star</option>
                <option>2 Star</option>
                <option>1 Star</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="table-responsive">
            <RatingsTable />
          </div>
        </div>
      </div>
    </section>
  );
};
