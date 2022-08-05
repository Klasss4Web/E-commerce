import React from 'react'

export const ProductsStatistics = () => {
  return (
    <div className="col-xs-6 col-lg-12 card-animate">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Products Statistics</h5>
          <iframe
            style={{
              background: "#21313C",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            }}
            width="100%"
            height="350px"
            src="https://charts.mongodb.com/charts-e-commerce-rnwdv/embed/charts?id=62ec04ba-7e96-47c0-86bf-4cfb6b3be189&maxDataAge=3600&theme=dark&autoRefresh=true"
          ></iframe>
        </article>
      </div>
    </div>
  );
}

