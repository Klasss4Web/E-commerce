import React from 'react'

export const SalesStatistics = () => {
  return (
    <div className="col-xs-6 col-lg-12 card-animate">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Sales Statistics</h5>
          <iframe
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            }}
            width="100%"
            height="350px"
            src="https://charts.mongodb.com/charts-e-commerce-rnwdv/embed/charts?id=62ebfd09-5496-43d0-831a-6d3ebf97bb44&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
        </article>
      </div>
    </div>
  );
}
