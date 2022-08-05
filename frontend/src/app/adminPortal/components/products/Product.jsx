import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { adminDeleteProduct } from '../../../../redux/actions/productActions'

export const Product = ({ product }) => {

  const dispatch = useDispatch()

  const handleDeleteProduct = (productId) => {
   if(window.confirm("Are you sure??")) {
      dispatch(adminDeleteProduct(productId))
    }
  }

  return (
    <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
      <div className="card card-product-grid shadow-sm">
        <Link to={"#"} className="img-wrap">
          <img src={product?.image} alt="Product Image" />
        </Link>
        <div className="info-wrap">
          <Link to="#" className="title text-truncate">
            {product?.name}
          </Link>
          <p className="price mb-2">${product?.price}</p>
          <div className="row">
            <Link
              to={`/product/${product?._id}/edit`}
              className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
            >
              <i className="fas fa-pen"></i>
            </Link>
            <Link
              to="#"
              onClick={()=>handleDeleteProduct(product?._id)}
              className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
            >
              <i className="fas fa-trash-alt"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
