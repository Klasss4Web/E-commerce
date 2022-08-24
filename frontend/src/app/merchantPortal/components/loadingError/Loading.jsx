import React from 'react'

const Loading = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "80vw", height: "50vh" }}
    >
      <div
        className="spinner-border text-success"
        role="status"
        style={{ width: "50px", height: "50px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;