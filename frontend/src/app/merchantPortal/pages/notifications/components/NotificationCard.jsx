import React from 'react'

export const NotificationCard = ({ notifications }) => {
  return (
    <div
      className="card"
      style={{ width: "100%", borderRadius: "10px", marginTop: "15px" }}
    >
      <div className="card-body">
        <h5 className="card-title">Request for approval</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div
          className="d-flex justify-content-between my-3"
          style={{ width: "300px" }}
        >
          <button className="btn btn-primary" style={{ width: "48%" }}>
            Approve
          </button>
          <button className="btn btn-danger" style={{ width: "48%" }}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};
