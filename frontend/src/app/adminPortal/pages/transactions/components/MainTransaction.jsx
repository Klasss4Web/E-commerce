import React, { useEffect } from "react";

import { TransactionTable, Orders } from "./TransactionTable";

export const MainTransaction = ({ orderId }) => {


  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Transactions</h2>
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
                <option>Status</option>
                <option>Latest</option>
                <option>Archive</option>
                <option>Show all</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="table-responsive">
           
              <TransactionTable />

          </div>
        </div>
      </div>
    </section>
  );
};
