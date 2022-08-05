import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom';
import { adminListProducts } from '../../../../redux/actions/productActions';
import Message from '../loadingError/Error';
import Loading from '../loadingError/Loading';
import { Product } from './Product';

export const MainProducts = () => {

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.adminProductList);
  const { products, error, loading} = productList

  const adminDeleteProduct = useSelector((state) => state.adminDeleteProduct);
  const { error: deleteError, success } = adminDeleteProduct;

  useEffect(() => {
    dispatch(adminListProducts())
  },[dispatch, success])

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Products</h2>
        <div>
          <Link to="/add-products" className="btn btn-primary">
            Add New Product
          </Link>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="search"
                placeholder="Search..."
                className="form-control p-2"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Gadgets</option>
                <option>Others</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Latest</option>
                <option>Electronics</option>
                <option>Discounts</option>
                <option>Popular demand</option>
              </select>
            </div>
          </div>
        </header>

        <div className="card-bod">
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row">
              {/* Products */}

              {products?.map((product) => (
                <Product product={product} key={product?._id} />
              ))}
            </div>
          )}

          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Previous
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
