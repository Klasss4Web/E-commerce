import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { adminDeleteProduct } from '../../../../../redux/actions/productActions'


export const Product = ({ product }) => {

  const dispatch = useDispatch()

  const handleDeleteProduct = (productId) => {
   if(window.confirm("Are you sure??")) {
      dispatch(adminDeleteProduct(productId))
    }
  }

  return (
    <div className="col-md-6 col-sm-6 col-lg-3 mt-4">
      <div
        className="card card-product-grid"
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <Link to={"#"} className="img-wrap">
          <img
            src={product?.image}
            alt="Product Image"
            style={{ height: "170px", width: "100%" }}
          />
        </Link>
        <div
          className="info-wrap p-2"
          style={{ width: "100%", overflowX: "hidden" }}
        >
          <Link to="#" className="title text-truncate">
            {product?.name}
          </Link>
          <p className="price mb-2">${product?.price}</p>
          <div className="row justify-content-between">
            <Link
              to={`/product/${product?._id}/edit`}
              className="btn btn-sm btn-outline-success p-1 pb-0 col-md-5"
            >
              <i className="fas fa-pen"></i>
            </Link>
            <Link
              to="#"
              onClick={() => handleDeleteProduct(product?._id)}
              className="btn btn-sm btn-outline-danger p-1 pb-1 col-md-5"
            >
              <i className="fas fa-trash-alt"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
